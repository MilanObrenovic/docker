#!/bin/bash
echo "===================================="
echo "=== BUILDING DOCKER IMAGE - 2048 ==="
echo "===================================="
docker build --no-cache -t milanobrenovic/2048 .

echo "==================================="
echo "=== PUSHING DOCKER IMAGE - 2048 ==="
echo "==================================="
docker push milanobrenovic/2048
