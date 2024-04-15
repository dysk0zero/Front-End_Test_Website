# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build your Next.js app
RUN npm run build

# Expose port 3000 to the outside once the container is running
EXPOSE 3000

# Define the command to run your app using npm start script
CMD ["npm", "start"]
