FROM node:22-slim

WORKDIR /app

COPY *.json .

RUN npm i
RUN npm i -g typescript

COPY . .

RUN npm run build

CMD [ "npm", "run", "migrate:prod" ]