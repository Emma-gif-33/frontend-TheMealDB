FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

# docker rm -f cont-front
# docker build --build-arg NEXT_PUBLIC_API_URL=http://host.docker.internal:3005/api -t front-postres .
# docker run -d -p 3001:3000 --add-host=host.docker.internal:host-gateway --name cont-front front-postres