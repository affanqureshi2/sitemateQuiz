FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm run build

COPY . .

EXPOSE 3000

USER node

CMD ["npm", "start"]