FROM node:lts-alpine
WORKDIR /webapp



RUN apk update && apk add --no-cache \
    # needed for node-gyp.. some do it with npm install in one layer
    # https://github.com/mhart/alpine-node/issues/27
    # https://github.com/nodejs/docker-node/issues/384
    # https://github.com/nodejs/docker-node/issues/282
    g++ make python \
    rsync \
    && rm -rf /var/cache/apk/*


ENV PATH /app/node_modules/.bin:$PATH

COPY package.json npm-shrinkwrap.json ./

# In the past we had ulimit issues and "ulimit -n 2000 &&"
RUN npm ci
COPY . ./
RUN npm run-script build

# When upgrading, we want to enable clients to continue using a previous bundle
# without the application crashing and asking for a refresh
# The strategy is to server the application from a named volume at
VOLUME /builds
# When we start the app, we  copy the bundle over there and ensure new clients
# get the new version.
CMD ["rsync", "-r", "build/", "/builds"]
