#!/usr/bin/env bash
# Per-boot startup for the Alfa Retailers app: bring up PostgreSQL, ensure the
# dev role/database exist, and sync the Prisma schema. Must be idempotent and
# return (the dev server itself runs as a terminal, not here).
set -euo pipefail

cd "$(dirname "$0")/.."

# Start the PostgreSQL cluster if it is not already online.
if ! pg_lsclusters -h 2>/dev/null | awk '{print $4}' | grep -q online; then
  echo "Starting PostgreSQL cluster..."
  sudo pg_ctlcluster 16 main start || true
fi

# Wait for the server to accept connections.
for _ in $(seq 1 30); do
  if pg_isready -h 127.0.0.1 -p 5432 >/dev/null 2>&1; then
    break
  fi
  sleep 1
done

# Ensure the application role exists.
if ! sudo -u postgres psql -tAc "SELECT 1 FROM pg_roles WHERE rolname='alfa'" | grep -q 1; then
  echo "Creating role 'alfa'..."
  sudo -u postgres psql -c "CREATE ROLE alfa LOGIN PASSWORD 'alfa';"
fi

# Ensure the application database exists.
if ! sudo -u postgres psql -tAc "SELECT 1 FROM pg_database WHERE datname='alfaretailers'" | grep -q 1; then
  echo "Creating database 'alfaretailers'..."
  sudo -u postgres createdb -O alfa alfaretailers
fi

# Sync the Prisma schema to the database (idempotent).
npx prisma db push --skip-generate

echo "start.sh complete. PostgreSQL is online and schema is in sync."
