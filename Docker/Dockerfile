FROM kalilinux/kali-rolling

RUN apt update && \
    apt install -y \
    xfce4 \
    xfce4-terminal \
    tigervnc-standalone-server \
    dbus-x11 \
    wget \
    curl \
    net-tools && \
    apt clean

COPY startup.sh /usr/local/bin/startup.sh

COPY xstartup /usr/local/bin/xstartup

RUN chmod +x /usr/local/bin/startup.sh

RUN chmod +x /usr/local/bin/xstartup

CMD ["/usr/local/bin/startup.sh"]