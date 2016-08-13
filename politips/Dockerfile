FROM ubuntu:16.04

RUN sed -i 's/archive.ubuntu.com/us-central1.gce.archive.ubuntu.com/g' /etc/apt/sources.list &&\
    apt-get update &&\
    apt-get install --yes --no-install-recommends\
        ca-certificates wget curl git python3 python3-pip python3-setuptools libpq-dev python3-dev\
        build-essential python3-wheel libpcre3 libpcre3-dev libmysqlclient-dev &&\
    pip3 install --upgrade pip

ADD requirements.txt /tmp/requirements.txt
RUN pip3 install -r /tmp/requirements.txt

RUN useradd -m politips

RUN rm -rf /var/cache/apt /root/.cache

USER politips
ENV HOME /home/politips/
ADD . /home/politips/politips
WORKDIR /home/politips/politips
