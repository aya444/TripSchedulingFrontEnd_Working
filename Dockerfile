# FROM node:18.10.0 as build
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# RUN npm install -g @angular/cli
# RUN ng build --configuration production --output-path=/dist

# FROM nginxinc/nginx-unprivileged 
# COPY --from=build /dist /usr/share/nginx/html
# COPY /nginx/default.conf /etc/nginx/conf.d/default.conf
# RUN chmod 777 /etc/nginx/conf.d/default.conf

# ENTRYPOINT ["nginx","-g","daemon off;"]

FROM node:18.10.0 as builder
RUN mkdir -p /app
WORKDIR /usr/src/app
COPY . .
RUN npm i -g @angular/cli
RUN npm install
RUN npm run build --prod

FROM nginxinc/nginx-unprivileged
COPY --from=builder /usr/src/app/dist/trip-angular-app /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
