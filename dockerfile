FROM node:alpine

WORKDIR /usr/app

COPY package*.js ./
 
RUN npm install

COPY . .
EXPOSE 5000

CMD ["npm", "start"]