#!/usr/bin/env bash
set -euo pipefail

REPO_NAME="${1:-Filter}"
VISIBILITY="${2:---private}"

git init
git add .
git commit -m "Initial mock MVP for Filtr portal and studio"
gh repo create "$REPO_NAME" "$VISIBILITY" --source=. --remote=origin --push

echo "Repository created and pushed: $REPO_NAME"
