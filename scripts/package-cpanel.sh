#!/usr/bin/env bash
# Build the site and zip a self-contained bundle for cPanel "Setup Node.js App".
# Upload federal-logistics-cpanel.zip to the application root and extract it there.
set -euo pipefail
cd "$(dirname "$0")/.."

pnpm build
cp -r public .next/standalone/
mkdir -p .next/standalone/.next
cp -r .next/static .next/standalone/.next/

rm -f federal-logistics-cpanel.zip
(cd .next/standalone && zip -qr ../../federal-logistics-cpanel.zip . -x ".env*")
echo "Created federal-logistics-cpanel.zip ($(du -h federal-logistics-cpanel.zip | cut -f1))"
