# ====== BUILD STAGE ======
FROM oven/bun:latest AS builder

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --log-level=debug --no-cache

COPY . .
RUN bun run build

# ====== NGINX STAGE ======
FROM nginx:stable

# Удаляем дефолтный конфиг
RUN rm -f /etc/nginx/conf.d/default.conf || true

# Копируем наш конфиг как основной vhost
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем сборку React
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]