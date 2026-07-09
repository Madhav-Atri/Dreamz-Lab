#!/bin/bash

echo "Starting DreamzLab..."

mkdir -p ~/.config/tigervnc
mkdir -p ~/.vnc

cp /usr/local/bin/xstartup ~/.vnc/xstartup
chmod +x ~/.vnc/xstartup

if [ ! -f ~/.config/tigervnc/passwd ]; then
    echo "dreamzlab" | vncpasswd -f > ~/.config/tigervnc/passwd
    chmod 600 ~/.config/tigervnc/passwd
fi

touch ~/.Xauthority

echo "Starting VNC server..."

vncserver :1 -geometry 1280x720 -depth 24

sleep 3

echo "Starting noVNC..."
/opt/noVNC/utils/novnc_proxy --vnc localhost:5901 --listen 6080 &

tail -f /dev/null

