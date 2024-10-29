FROM node:18

WORKDIR /usr/src/app

RUN chown -R node:node /usr/src/app

USER node

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build 

EXPOSE 3000

CMD ["node", "dist/index.js"]
