FROM ubuntu:16.04

RUN sed -i 's/archive.ubuntu.com/us-central1.gce.archive.ubuntu.com/g' /etc/apt/sources.list &&\
    apt-get update &&\
    apt-get install --yes --no-install-recommends ca-certificates curl

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - &&\
    apt-get install -y nodejs

RUN useradd -m politips

ADD package.json /home/politips/politips/politips-frontend/package.json
WORKDIR /home/politips/politips/politips-frontend/
RUN npm install
ADD . /home/politips/politips/politips-frontend/
RUN chown -R politips. /home/politips
USER politips
ENV HOME /home/politips/politips/politips-frontend
RUN ./node_modules/.bin/webpack
# RUN chown
# RUN cd npm install
# ADD . /home/politips/politips/politips-frontend

USER root
RUN rm -rf /var/cache/apt /root/.cache /var/lib/apt/lists/*
USER politips
