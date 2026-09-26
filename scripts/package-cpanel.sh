#!/usr/bin/env bash
# Build the site and zip a self-contained bundle for cPanel "Setup Node.js App".
# Upload federal-logistics-cpanel.zip to the application root and extract it there.
set -euo pipefail
cd "$(dirname "$0")/.."

rm -rf .next
pnpm build
cp -r public .next/standalone/
mkdir -p .next/standalone/.next
cp -r .next/static .next/standalone/.next/

# Passenger resolves modules from the extracted folder, so the bundle must be
# plain files (see nodeLinker: hoisted in pnpm-workspace.yaml).
if [ -n "$(find .next/standalone -type l -print -quit)" ]; then
  echo "Standalone output contains symlinks; refusing to package." >&2
  exit 1
fi

rm -f federal-logistics-cpanel.zip
(cd .next/standalone && zip -qr ../../federal-logistics-cpanel.zip . -x ".env*")
echo "Created federal-logistics-cpanel.zip ($(du -h federal-logistics-cpanel.zip | cut -f1))"
