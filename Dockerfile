FROM node:10.15.1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 8080

CMD [ "npm", "start" ]

ENTRYPOINT [ "sh", "-c", "'npm start'"]
