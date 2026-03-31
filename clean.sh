#!/usr/bin/env bash
set -euo pipefail

PROJ_DIR="$(cd "$(dirname "$0")" && pwd)"
PID_FILE="$PROJ_DIR/.dev.pid"

if [ ! -f "$PROJ_DIR/package.json" ] || [ ! -f "$PROJ_DIR/pnpm-workspace.yaml" ]; then
	echo "Current directory does not look like nano-agent project root: $PROJ_DIR"
	exit 1
fi

echo "Cleaning project at: $PROJ_DIR"

# Stop dev services if they are running.
if [ -f "$PID_FILE" ] && [ -x "$PROJ_DIR/stop.sh" ]; then
	echo "Detected running dev process, invoking stop.sh ..."
	"$PROJ_DIR/stop.sh" || true
fi

echo "Removing build/cache/dependency directories ..."
while IFS= read -r -d '' dir; do
	rm -rf "$dir"
done < <(
	find "$PROJ_DIR" -type d \( -name "node_modules" -o -name "dist" -o -name ".turbo" \) -print0
)

echo "Removing runtime artifacts ..."
rm -f "$PID_FILE"
rm -f /tmp/nano-agent-dev.log

echo "Resetting runtime data directories ..."
rm -rf "$PROJ_DIR/data"
rm -rf "$PROJ_DIR/apps/server/data"
mkdir -p "$PROJ_DIR/data"

echo "Removing common temp files ..."
while IFS= read -r -d '' file; do
	rm -f "$file"
done < <(
	find "$PROJ_DIR" -type f \( -name "*.tsbuildinfo" -o -name ".DS_Store" \) -print0
)

echo "Clean completed."
echo "Next steps:"
echo "  1) pnpm install"
echo "  2) ./start.sh"
