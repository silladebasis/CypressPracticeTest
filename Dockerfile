# Use a base image that includes Node.js
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

# Copy the rest of your application's code
COPY . .

# Expose the ports your application uses (optional, depending on your app)
EXPOSE 8080

# No need to define a CMD if you'll be running commands directly through Jenkins

