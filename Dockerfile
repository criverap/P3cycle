FROM node:latest

ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && apt-get install bash

WORKDIR /src
COPY ./src /src
RUN yarn build

WORKDIR /app

RUN mv /src/build/* /app
RUN rm -rf /src
RUN yarn global add serve

EXPOSE 5000

CMD ["serve", "-s", "/app"]