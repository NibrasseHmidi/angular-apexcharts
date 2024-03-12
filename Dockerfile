# Stage 1: Build Angular app
FROM node:16.10.0 AS builder

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install Angular CLI globally
RUN npm install -g @angular/cli
RUN npm run i18n:find

# Build the Angular app
RUN npm run build --prod
