FROM kalilinux/kali-rolling

RUN apt update && \
    apt install -y \
    xfce4 \
    xfce4-terminal \
    tigervnc-standalone-server \
    dbus-x11 \
    wget \
    curl \
    git \
    python3 \
    python3-pip \
    net-tools && \
    apt clean

RUN git clone https://github.com/novnc/noVNC.git /opt/noVNC

RUN pip3 install websockify

COPY startup.sh /usr/local/bin/startup.sh

COPY xstartup /usr/local/bin/xstartup

RUN chmod +x /usr/local/bin/startup.sh

RUN chmod +x /usr/local/bin/xstartup

CMD ["/usr/local/bin/startup.sh"]

