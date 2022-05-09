# https://programadorwebvalencia.com/ejecutar-gulp-en-docker/
FROM node:16.14.0

ARG ESPECIAL=""

ENV WORKDIR_PATH /var/www/html/${ESPECIAL}

RUN echo $WORKDIR_PATH

# Set work directory
WORKDIR $WORKDIR_PATH

# Globals
RUN npm install -g gulp-cli

# Local
RUN npm install gulp gulp-clean gulp-dart-sass gulp-sourcemaps 

RUN npm install --save bourbon