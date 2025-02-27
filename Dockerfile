# FROM node:20-slim

# WORKDIR /app

# # Copy package files
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy source code
# COPY . .

# # Build the application
# RUN npm run build

# # Set production environment
# ENV NODE_ENV=production

# # Expose application port
# EXPOSE 3000

# # Start the application
# CMD ["node", "dist/main"]

# Build stage(jay latest version)
FROM node:20-slim AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies)
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM gcr.io/distroless/nodejs20

WORKDIR /app

# Copy built application and production node_modules from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# Set production environment
ENV NODE_ENV=production

# Expose application port
EXPOSE 3000

# Start the application
CMD ["dist/main"]