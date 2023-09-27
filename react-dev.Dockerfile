FROM node:14.15.4-alpine3.12

WORKDIR /app

ENV NODE_ENV='development'

RUN npm install -g create-react-app

RUN npm install -g styled-components

RUN npm install -g react-router-dom

RUN npm install -g axios

EXPOSE  3000
