# Stage 1 - the build process
FROM node:8 as build-deps

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.12-alpine

ARG NGINX_HTTPS_PORT_NUMBER
ENV NGINX_HTTPS_PORT_NUMBER=$NGINX_HTTPS_PORT_NUMBER

ARG NGINX_HTTP_PORT_NUMBER
ENV NGINX_HTTP_PORT_NUMBER=$NGINX_HTTP_PORT_NUMBER

COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY --from=build-deps /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080