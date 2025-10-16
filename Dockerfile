FROM node:20-alpine

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn install

RUN yarn global add serve

RUN yarn global add typescript

COPY . .

RUN yarn build

CMD [ "serve", "-s", "dist" ]
