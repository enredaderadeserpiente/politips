FROM ubuntu:16.04

RUN sed -i 's/archive.ubuntu.com/us-central1.gce.archive.ubuntu.com/g' /etc/apt/sources.list &&\
    apt-get update &&\
    apt-get install --yes --no-install-recommends\
        ca-certificates nginx

RUN useradd -m politips

ADD . /home/politips/politips/politips_proxy/

USER politips

CMD nginx -c /home/politips/politips/politips_proxy/nginx.conf
