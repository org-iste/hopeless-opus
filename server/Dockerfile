# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --omit=dev

# Copy the rest of the server files
COPY . .

# Expose the port (default 5000)
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
