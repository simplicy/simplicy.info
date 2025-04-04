FROM node:20-alpine

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn install

RUN yarn global add serve

RUN yarn global add typescript

COPY . .

ARG VITE_AUTH0_DOMAIN
ARG VITE_AUTH0_CLIENT_ID
ARG VITE_AUTH0_CALLBACK_URL
ARG VITE_AUTH0_AUDIENCE

ENV VITE_AUTH0_DOMAIN="closyt.us.auth0.com"
ENV VITE_AUTH0_CLIENT_ID="N3DB0jDXJGdePAGyjswXBwcBzWKrAHXY"
ENV VITE_AUTH0_CALLBACK_URL="https://simplicy.info"
ENV VITE_AUTH0_AUDIENCE="https://closyt.com/"


RUN yarn build

CMD [ "serve", "-s", "dist" ]
