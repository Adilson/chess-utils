#!/bin/sh
set -e

if [ -z "$1" ]; then
  tcpserver -c2 0 23249 /stockfish/stockfish
else
  exec "$@"
fi