# Stage 1: Build the application
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Stage 2: Serve the built application using Nginx
# dist/my-todo-list --> outputPath from angular.json
FROM nginx:alpine
COPY --from=node /app/dist/my-todo-list /usr/share/nginx/html