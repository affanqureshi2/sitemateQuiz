FROM node:lts-alpine 

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

USER node

CMD [ "npm", "start", "app" ]
