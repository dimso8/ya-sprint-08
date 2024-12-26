FROM node:20.17-alpine AS base
WORKDIR /src

COPY ./src/package.json ./src/package-lock.json ./
RUN npm ci --omit=dev

COPY ./src .
EXPOSE 8000

CMD ["npm", "start"]