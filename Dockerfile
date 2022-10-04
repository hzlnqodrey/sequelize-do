FROM node:14.17.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

# Copy local app folder to the container
COPY . .

RUN chown -R node /app/node_modules

# Build Production app
# RUN npm run build

# Start the service
# CMD npm start
CMD ["node", "server.js"]