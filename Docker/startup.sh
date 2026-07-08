#!/bin/bash

echo "Starting DreamzLab..."

mkdir -p ~/.vnc

cp /usr/local/bin/xstartup ~/.vnc/xstartup

chmod +x ~/.vnc/xstartup

echo "dreamzlab" | vncpasswd -f > ~/.vnc/passwd

chmod 600 ~/.vnc/passwd

touch ~/.Xauthority

vncserver :1 -geometry 1280x720 -depth 24

tail -f /root/.vnc/*.log

websockify \
6080 \
localhost:5901 \