FROM node:20-alpine as build

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn install

RUN yarn global add typescript

COPY . .

RUN yarn build

FROM node:20-slim as final

WORKDIR /app

COPY --from=build /app/dist ./dist

RUN yarn global add serve

CMD [ "serve", "-s", "dist" ]
