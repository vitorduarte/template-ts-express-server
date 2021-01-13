FROM node:10-alpine as builder
COPY ./package.json .
# Uncomment if you are using node-gyp
# RUN apk add --no-cache --virtual .gyp python make g++
RUN npm install


FROM node:10-alpine as app
WORKDIR /express-server
COPY --from=builder /node_modules ./node_modules
COPY --from=builder /package.json .
COPY tsconfig.json .
ADD src ./src
RUN npm run build
CMD npm start
