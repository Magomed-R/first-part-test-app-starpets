FROM node:23

WORKDIR /app

COPY *.json .

RUN npm i
RUN npm i -g typescript

COPY . .

RUN npm run build

CMD [ "npm", "run", "prod" ]