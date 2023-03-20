# Every Docker file will base off of some image.
# Since this is a NodeJS backend we want to base it off of `node` image.
FROM node

# Build this docker image in `/src`.
# This will create a folder called `src` inside of every single container.
WORKDIR /src

# Add everything FROM this current working directory (the first dot `.`)
# INTO `/src`.
ADD . .

# You can do `npm install` or `npm add`, it's the same thing.
# This will install all required packages in order to run the backend app.
RUN npm install

# Execute a command to start the server.
CMD ["node", "server.js"]
