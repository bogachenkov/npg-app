FROM positivly/prisma-binaries:latest as prisma
FROM node:16.13.2-alpine

RUN apk add --no-cache libc6-compat openssl git dos2unix postgresql-client

# Set prisma environment:
ENV PRISMA_QUERY_ENGINE_BINARY=/prisma-engines/query-engine \
  PRISMA_MIGRATION_ENGINE_BINARY=/prisma-engines/migration-engine \
  PRISMA_INTROSPECTION_ENGINE_BINARY=/prisma-engines/introspection-engine \
  PRISMA_FMT_BINARY=/prisma-engines/prisma-fmt \
  PRISMA_CLI_QUERY_ENGINE_TYPE=binary \
  PRISMA_CLIENT_ENGINE_TYPE=binary
COPY --from=prisma /prisma-engines/query-engine /prisma-engines/migration-engine /prisma-engines/introspection-engine /prisma-engines/prisma-fmt /prisma-engines/

WORKDIR /home/app/api

COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile

COPY . .

RUN yarn prisma generate

RUN chmod +x ./wait-for-it.sh
RUN dos2unix ./wait-for-it.sh

EXPOSE ${API_CONTAINER_PORT}

CMD sh ./wait-for-it.sh ${POSTGRES_HOST} ${POSTGRES_USER} yarn prisma migrate dev --name init && yarn dev