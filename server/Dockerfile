# Use the official Node.js image with a specific version
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /server

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the server application code to the working directory
COPY . .


# Expose the port Node.js server runs on (usually 3001)
EXPOSE 3001

# Command to run the Node.js server
CMD ["node", "server.js"]

