#!/bin/bash

if [[ $(docker ps -q) ]]; then
    docker stop $(docker ps -q)
    echo "Running containers stopped."
else
    echo "No running containers to stop."
fi

if [[ $(docker ps -aq) ]]; then
    docker rm $(docker ps -aq)
    echo "Stopped containers removed."
else
    echo "No stopped containers to remove."
fi

echo "Container cleanup complete."
