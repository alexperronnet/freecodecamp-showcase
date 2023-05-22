#!/bin/bash
set -e
set -o pipefail

# Default values
build_command="build"
build_dir="dist"
default_branch="main"
deploy_branch="deploy"
origin_remote="origin"
commit_message="Automatic build commit"
commit_hash=$(git rev-parse --short HEAD)

# Build the project
if ! pnpm $build_command; then
  echo "Build failed"
  exit 1
fi

# Check if deploy branch exists
if git show-ref --verify --quiet refs/heads/$deploy_branch; then
  # Checkout deploy branch
  git checkout $deploy_branch
else
  # Create deploy branch
  git checkout -b $deploy_branch
fi

# Remove old build files
git rm -r *

# Copy build files to root
cp -r $build_dir/* .

# Add all files to git
git add .

# Commit changes
git commit -m "$commit_message: $commit_hash"

# Push changes to deploy branch
git push $origin_remote $deploy_branch

# Checkout main branch
git checkout $default_branch

# Delete dist folder
rm -rf $build_dir
