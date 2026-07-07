#!/bin/bash

echo "Starting DreamzLab..."

mkdir -p ~/.vnc

echo "dreamzlab" | vncpasswd -f > ~/.vnc/passwd

chmod 600 ~/.vnc/passwd

touch ~/.Xauthority

vncserver :1 -geometry 1280x720 -depth 24

tail -f /root/.vnc/*.log