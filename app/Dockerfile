# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Download .env file from direct link
RUN wget -O .env https://raw.githubusercontent.com/oshanavishkapiries/Disk/refs/heads/main/.env?token=GHSAT0AAAAAADCJ7SEX3IEYGUNT6KXEVKKQ2A5Y6OA

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 5175
EXPOSE 5175

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 