# ====== BUILD STAGE ======
FROM oven/bun:latest AS builder

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --log-level=debug --no-cache

COPY . .
RUN bun run build

# ====== NGINX STAGE ======
FROM nginx:alpine

# Удаляем дефолтный конфиг
RUN rm /etc/nginx/sites-enabled/default

# Копируем наш конфиг
COPY nginx.conf /etc/nginx/sites-enabled/default

# Копируем сборку React
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]