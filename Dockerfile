FROM node:19.3.0

WORKDIR /

COPY package*.json ./
RUN mkdir public src
COPY public ./public
COPY src ./src

RUN npm install
RUN npm install -g serve
RUN npm run build

CMD ["serve", "-s", "build", "-l", "4000"]
