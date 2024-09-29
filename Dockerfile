FROM node:20.7.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci 

COPY . .

COPY .env ./

RUN npm run build:docker

RUN npm ci --omit=dev

EXPOSE 3000

CMD ["node", "dist/main"]

