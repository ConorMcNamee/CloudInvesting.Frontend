FROM node:13.12.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm ci
RUN npm install react-script@3.4.1 -g --silent

COPY . ./
CMD ["npm", "start"]