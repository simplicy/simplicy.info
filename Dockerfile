FROM node:20-alpine as Build

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn install

RUN yarn global add typescript

COPY . .

RUN yarn build

# Final stage
FROM debian:bullseye-slim as Final
WORKDIR /dist
COPY --from=Build /app/dist /dist
# Copy the compiled binary and setup caddy
RUN apt-get update 
RUN apt-get install -y debian-keyring debian-archive-keyring apt-transport-https curl
RUN curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
RUN curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | tee /etc/apt/sources.list.d/caddy-stable.list
RUN chmod o+r /usr/share/keyrings/caddy-stable-archive-keyring.gpg
RUN chmod o+r /etc/apt/sources.list.d/caddy-stable.list
RUN apt update
RUN apt install caddy
RUN cd /dist
# Start caddy static file server without tls
CMD caddy file-server --browse --root /dist --listen :80
