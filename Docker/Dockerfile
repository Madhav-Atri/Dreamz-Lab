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
    python3-pip \doce
    python3-venv \
    net-tools && \
    apt clean

RUN python3 -m venv /opt/venv

ENV PATH="/opt/venv/bin:$PATH"

RUN git clone https://github.com/novnc/noVNC.git /opt/noVNC

RUN ln -s opt/noVNC/vnc.html /opt/noVNC/index.html

RUN pip install --no-cache-dir websockify

COPY startup.sh /usr/local/bin/startup.sh

COPY xstartup /usr/local/bin/xstartup

RUN chmod +x /usr/local/bin/startup.sh

RUN mkdir -p /root/.vnc

RUN chmod +x /usr/local/bin/xstartup

EXPOSE 6080
EXPOSE 5901

WORKDIR /root

CMD ["/usr/local/bin/startup.sh"]
