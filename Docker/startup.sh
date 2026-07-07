#!/bin/bash

echo "Starting DreamzLab Kali Container..."

mkdir -p ~/.vnc

touch ~/.Xauthority

startxfce4 &

tail -f /dev/null
