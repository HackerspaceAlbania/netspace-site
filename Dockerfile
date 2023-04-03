FROM node:18.0.0-alpine as builder

WORKDIR /app

COPY ./package*json ./
RUN npm ci

COPY . .

RUN npm run build

RUN rm -f .env


FROM nginx as final

COPY --from=builder /app/public /usr/share/nginx/html