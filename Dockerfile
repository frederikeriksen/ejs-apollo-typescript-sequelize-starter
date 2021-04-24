FROM node:15

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080

CMD ["npm", "run", "start"]
