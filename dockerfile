FROM node:20-alpine

WORKDIR /app
COPY . .
WORKDIR /app/front
RUN npm install
#RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "dev"]

EXPOSE 3001
CMD ["npm", "run", "start"]