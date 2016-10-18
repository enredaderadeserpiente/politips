FROM ubuntu:16.04

RUN \
    apt-get update && apt-get install --yes --no-install-recommends curl ca-certificates &&\
    curl -sL https://deb.nodesource.com/setup_6.x | bash - &&\
    apt-get install --yes --no-install-recommends nodejs nginx
 
RUN useradd -m politips

ADD package.json /home/politips/politips/politips-frontend/package.json
WORKDIR /home/politips/politips/politips-frontend/
RUN npm install
ADD . /home/politips/politips/politips-frontend/
RUN chown -R politips. /home/politips
USER politips
ENV HOME /home/politips/politips/politips-frontend
RUN ./node_modules/.bin/webpack

USER root
RUN rm -rf /var/cache/apt /root/.cache /var/lib/apt/lists/*
USER politips

CMD node index.js