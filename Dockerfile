FROM node:14-slim

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json .

RUN npm install

# Bundle app source
COPY . .

# this docker container works as an executable
# with "docker run IMAGENAME PARAMETER" i can pass the wanted timezone as a parameter
# if no parameter is passed the local time is used

ENTRYPOINT [ "node" , "zeitservice"]

# if i wanted a docker container that just starts a shell 
# so that i would have to run "node zeitservice PARAMETER" myself 
# i would have to use
# CMD /bin/bash



