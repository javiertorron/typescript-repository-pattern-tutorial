#Specify a base image
FROM node:alpine

RUN npm install -g npm@9.6.0

#Specify a working directory
WORKDIR /usr/app

#Copy the dependencies file
COPY ./package.json ./

#Install dependencies
RUN npm install 

#Copy remaining files
COPY ./dist ./

#Default command
CMD ["npm","start"]