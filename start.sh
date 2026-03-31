#!/usr/bin/env bash
set -e

PROJ_DIR="$(cd "$(dirname "$0")" && pwd)"
PID_FILE="$PROJ_DIR/.dev.pid"

if [ -f "$PID_FILE" ]; then
	echo "Dev server seems already running (PID file exists). Run stop.sh first."
	exit 1
fi

cd "$PROJ_DIR"

# Ensure pnpm is available.
if ! command -v pnpm >/dev/null 2>&1; then
	if command -v corepack >/dev/null 2>&1; then
		echo "pnpm not found, trying to activate via corepack ..."
		corepack enable >/dev/null 2>&1 || true
		corepack prepare pnpm@9.15.4 --activate
	else
		echo "pnpm not found. Please install pnpm first."
		exit 1
	fi
fi

# Detect/install JS dependencies.
FORCE_INSTALL="${FORCE_PNPM_INSTALL:-false}"
FORCE_INSTALL_LOWER="$(echo "$FORCE_INSTALL" | tr '[:upper:]' '[:lower:]')"
NEED_INSTALL="false"
INSTALL_REASON=""

if [ ! -d "$PROJ_DIR/node_modules" ]; then
	NEED_INSTALL="true"
	INSTALL_REASON="root node_modules is missing"
fi

if [ "$NEED_INSTALL" = "false" ]; then
	for WORKSPACE in "apps/server" "apps/web" "packages/db" "packages/shared"; do
		if [ ! -d "$PROJ_DIR/$WORKSPACE/node_modules" ]; then
			NEED_INSTALL="true"
			INSTALL_REASON="$WORKSPACE/node_modules is missing"
			break
		fi
	done
fi

if [ "$NEED_INSTALL" = "false" ] && [ -f "$PROJ_DIR/pnpm-lock.yaml" ]; then
	MODULES_META="$PROJ_DIR/node_modules/.modules.yaml"
	if [ ! -f "$MODULES_META" ] || [ "$PROJ_DIR/pnpm-lock.yaml" -nt "$MODULES_META" ]; then
		NEED_INSTALL="true"
		INSTALL_REASON="pnpm-lock.yaml changed since last install"
	fi
fi

if [ "$FORCE_INSTALL_LOWER" = "true" ] || [ "$FORCE_INSTALL_LOWER" = "1" ] || [ "$FORCE_INSTALL_LOWER" = "yes" ]; then
	NEED_INSTALL="true"
	INSTALL_REASON="FORCE_PNPM_INSTALL=$FORCE_INSTALL"
fi

if [ "$NEED_INSTALL" = "true" ]; then
	echo "Installing dependencies ($INSTALL_REASON) ..."
	pnpm install --frozen-lockfile
else
	echo "Dependencies already installed, skip pnpm install."
fi

# Load .env file
if [ -f ".env" ]; then
	set -a
	source .env
	set +a
else
	echo "Info: .env file not found. Starting with built-in defaults."
	echo "      You can still create .env later to override settings (API keys, ports, paths)."
fi

# Ensure server and init script always use the same sandbox directories.
if [ -z "${LOCAL_SANDBOX_TEMPLATE_DIR:-}" ]; then
	DEFAULT_TEMPLATE_NAME_FROM_ENV="${LOCAL_SANDBOX_TEMPLATE_NAME:-python-base}"
	export LOCAL_SANDBOX_TEMPLATE_DIR="$PROJ_DIR/data/sandbox-templates/$DEFAULT_TEMPLATE_NAME_FROM_ENV"
fi
if [ -z "${LOCAL_SANDBOX_ROOT_DIR:-}" ]; then
	export LOCAL_SANDBOX_ROOT_DIR="$PROJ_DIR/data/sandboxes"
fi

# Initialize/reuse local Python template venv before starting services
AUTO_INIT="${LOCAL_SANDBOX_TEMPLATE_AUTO_INIT:-true}"
AUTO_INIT_LOWER="$(echo "$AUTO_INIT" | tr '[:upper:]' '[:lower:]')"
if [ "$AUTO_INIT_LOWER" = "false" ] || [ "$AUTO_INIT_LOWER" = "0" ] || [ "$AUTO_INIT_LOWER" = "no" ]; then
	echo "Skip Python template initialization (LOCAL_SANDBOX_TEMPLATE_AUTO_INIT=$AUTO_INIT)."
else
	DEFAULT_TEMPLATE_NAME="python-base"
	DEFAULT_PACKAGES="numpy,pandas,matplotlib,scipy,openpyxl,requests,pydantic,jinja2,beautifulsoup4,andes"
	TEMPLATE_DIR="${LOCAL_SANDBOX_TEMPLATE_DIR:-$PROJ_DIR/data/sandbox-templates/$DEFAULT_TEMPLATE_NAME}"
	VENV_DIR="$TEMPLATE_DIR/.venv"
	VENV_PY="$VENV_DIR/bin/python"
	REQUIREMENTS_LOCK="$TEMPLATE_DIR/requirements.lock"
	RESET_TEMPLATE="${LOCAL_SANDBOX_TEMPLATE_RESET:-false}"
	RESET_TEMPLATE_LOWER="$(echo "$RESET_TEMPLATE" | tr '[:upper:]' '[:lower:]')"
	PYTHON_PACKAGES="${LOCAL_SANDBOX_PYTHON_PACKAGES:-$DEFAULT_PACKAGES}"

	echo "Preparing Python template: $TEMPLATE_DIR"
	mkdir -p "$TEMPLATE_DIR"

	if [ "$RESET_TEMPLATE_LOWER" = "true" ] || [ "$RESET_TEMPLATE_LOWER" = "1" ] || [ "$RESET_TEMPLATE_LOWER" = "yes" ]; then
		if [ -d "$VENV_DIR" ]; then
			echo "Reset template venv: $VENV_DIR"
			rm -rf "$VENV_DIR"
		fi
	fi

	if [ -x "$VENV_PY" ] && "$VENV_PY" --version >/dev/null 2>&1; then
		echo "Reusing existing venv: $VENV_DIR"
	else
		if command -v python3 >/dev/null 2>&1; then
			HOST_PYTHON="python3"
		elif command -v python >/dev/null 2>&1; then
			HOST_PYTHON="python"
		else
			echo "Python runtime not found. Please install python3 first."
			exit 1
		fi

		echo "Creating venv with $HOST_PYTHON ..."
		"$HOST_PYTHON" -m venv "$VENV_DIR"

		echo "Upgrading pip ..."
		"$VENV_PY" -m pip install --upgrade pip

		if [ -f "$REQUIREMENTS_LOCK" ]; then
			echo "Installing dependencies from requirements.lock ..."
			"$VENV_PY" -m pip install -r "$REQUIREMENTS_LOCK"
		else
			echo "Installing default dependency set ..."
			IFS=',' read -r -a PKG_ARRAY <<< "$PYTHON_PACKAGES"
			VALID_PKG_ARRAY=()
			for i in "${!PKG_ARRAY[@]}"; do
				PKG_ARRAY[$i]="$(echo "${PKG_ARRAY[$i]}" | xargs)"
				if [ -n "${PKG_ARRAY[$i]}" ]; then
					VALID_PKG_ARRAY+=("${PKG_ARRAY[$i]}")
				fi
			done
			if [ "${#VALID_PKG_ARRAY[@]}" -gt 0 ]; then
				"$VENV_PY" -m pip install --upgrade "${VALID_PKG_ARRAY[@]}"
			else
				echo "No LOCAL_SANDBOX_PYTHON_PACKAGES configured. Skip package installation."
			fi
		fi

		"$VENV_PY" -m pip freeze > "$REQUIREMENTS_LOCK"
		echo "Template initialized."
	fi
fi

# Start dev servers
nohup pnpm dev > /tmp/nano-agent-dev.log 2>&1 &
echo $! > "$PID_FILE"

echo ""
echo "Dev server started (PID: $(cat "$PID_FILE"))"
echo "  Web:      http://localhost:5173"
echo "  API:      http://localhost:3000"
echo "  Logs:     /tmp/nano-agent-dev.log"
