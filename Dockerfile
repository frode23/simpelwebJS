#specify a base image
from node:alpine
workdir /usr/app
#install some dependencies
copy ./package.json ./

run npm install
copy ./ ./
#default command  frode
cmd ["npm", "start"]
