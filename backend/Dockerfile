FROM node:20.17-alpine AS base
WORKDIR /src

COPY ./src/package.json .
RUN npm install

COPY ./src .
EXPOSE 8000
CMD ["npm", "run", "dev"]

#FROM base AS dev
#RUN --mount=type=bind,source=package.json,target=package.json \
#    --mount=type=bind,source=package-lock.json,target=package-lock.json \
#    --mount=type=cache,target=/root/.npm \
#    npm ci --include=dev
#
#USER node
#COPY . .
#CMD npm run dev

#FROM base AS prod
#RUN --mount=type=bind,source=package.json,target=package.json \
#    --mount=type=bind,source=package-lock.json,target=package-lock.json \
#    --mount=type=cache,target=/root/.npm \
#    npm ci --omit=dev
#USER node
#COPY . .
#CMD node src/app.js