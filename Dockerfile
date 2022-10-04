FROM node:14.17.0-alpine

WORKDIR /usr/src/app

ENV PORT=8080
ENV HOST=0.0.0.0

COPY package*.json ./

RUN npm install --only=production

# Copy local app folder to the container
COPY . .

# Build Production app
# RUN npm run build

# Start the service
# CMD npm start
CMD ["node", "server.js"]

