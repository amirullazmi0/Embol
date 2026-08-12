FROM node:22-alpine AS dependencies

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-alpine AS builder

WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Vite emits plain static files, so the runtime only needs a web server —
# no Node process, unlike the Next.js apps.
FROM nginx:1.27-alpine AS runner

# Written with printf rather than a heredoc so the legacy (non-BuildKit)
# builder can handle it too. Single quotes keep nginx's own $uri intact.
# Changing the port means changing it here, in EXPOSE and in HEALTHCHECK.
RUN printf '%s\n' \
    'server {' \
    '    listen 3004;' \
    '    server_name _;' \
    '' \
    '    root /usr/share/nginx/html;' \
    '    index index.html;' \
    '' \
    '    gzip on;' \
    '    gzip_min_length 1024;' \
    '    gzip_types text/css application/javascript image/svg+xml;' \
    '' \
    '    # Vite fingerprints these filenames, so cache them forever.' \
    '    location /assets/ {' \
    '        expires 1y;' \
    '        add_header Cache-Control "public, immutable";' \
    '    }' \
    '' \
    '    # index.html must revalidate, or a deploy keeps serving stale' \
    '    # asset URLs.' \
    '    location = /index.html {' \
    '        add_header Cache-Control "no-cache";' \
    '    }' \
    '' \
    '    location / {' \
    '        try_files $uri $uri/ /index.html;' \
    '    }' \
    '}' \
    > /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 3004

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget -q -O - http://127.0.0.1:3004/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
