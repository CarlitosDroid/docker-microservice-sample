FROM node:latest

COPY . /home/node

RUN cd /home/node; npm install; mv node_modules /node_modules; npm install -g nodemon

EXPOSE 3000

CMD [ "node", "/home/node/index.js" ]
