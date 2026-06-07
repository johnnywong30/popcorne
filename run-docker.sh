#!/bin/bash

# Ensure we are in the root directory
cd "$(dirname "$0")"

# Check if Docker service is running
if ! systemctl is-active --quiet docker; then
    echo "🐳 Docker service is not running. Attempting to start..."
    sudo systemctl start docker
else
    echo "✅ Docker service is running."
fi

# Check if the current user has permission to access the Docker socket
if ! docker info > /dev/null 2>&1; then
    echo "❌ Permission denied: Your user '$USER' cannot access the Docker socket."
    echo "Please run: sudo usermod -aG docker $USER && newgrp docker"
    exit 1
fi

echo "🚀 Starting Popcorne Auth-API in Docker..."

# Clean up any stale dist folders to prevent cache issues
rm -rf dist

exec docker compose up --build --remove-orphans