#!/usr/bin/env bash

PROJ_DIR="$(cd "$(dirname "$0")" && pwd)"
PID_FILE="$PROJ_DIR/.dev.pid"

# Kill dev server by PID file
if [ -f "$PID_FILE" ]; then
	PID=$(cat "$PID_FILE")
	kill -- -"$PID" 2>/dev/null || kill "$PID" 2>/dev/null || true
	rm -f "$PID_FILE"
	echo "Stopped dev server (PID: $PID)"
fi

# Clean up any remaining processes on the ports
for PORT in 3000 5173; do
	PIDS=$(lsof -ti:"$PORT" 2>/dev/null || true)
	if [ -n "$PIDS" ]; then
		echo "$PIDS" | xargs kill -9 2>/dev/null || true
		echo "Killed remaining processes on port $PORT"
	fi
done

pkill -f "turbo dev" 2>/dev/null || true
pkill -f "tsx watch" 2>/dev/null || true

echo "All dev processes stopped."
