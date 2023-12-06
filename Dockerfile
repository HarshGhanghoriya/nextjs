FROM node:18 as builder

WORKDIR /app

COPY package*.json ./

COPY . .

EXPOSE 3212

RUN npm install --force 
RUN npm run build

CMD ["npm"  , "run" , "start"]


