FROM node:latest

WORKDIR /charms

COPY package.json yarn.lock

ENV PUPPETEER_SKIP_DOWNLOAD true

RUN yarn

COPY . .

EXPOSE 3000

CMD ["node", "dist/main.js"]