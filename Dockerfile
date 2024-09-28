FROM node:20.7.0-alpine3.15
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci 

COPY . .

COPY .env ./

RUN npm ci --omit=dev

RUN npm run build:docker

EXPOSE 3000

CMD ["node", "dist/main"]

