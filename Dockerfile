FROM node:20-alpine

WORKDIR /app

# Copy only package files first (better caching)
COPY package*.json ./

RUN npm install

# Copy full project
COPY . .

# Nuxt dev runs on 3000
EXPOSE 3000

CMD ["npm", "run", "dev"]