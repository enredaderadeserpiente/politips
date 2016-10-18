FROM ubuntu:16.04

RUN sed -i 's/archive.ubuntu.com/us-central1.gce.archive.ubuntu.com/g' /etc/apt/sources.list &&\
    apt-get update &&\
    apt-get install --yes --no-install-recommends\
        ca-certificates nginx

RUN useradd -m showlister

ADD . /home/showlister/showlister/showlister_proxy/

USER showlister

CMD nginx -c /home/showlister/showlister/showlister_proxy/nginx.conf
