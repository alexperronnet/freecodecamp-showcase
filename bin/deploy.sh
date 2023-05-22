#!/bin/bash
set -e
set -o pipefail

# Default values
build_command="build"
build_dir="dist"
default_branch="main"
deploy_branch="deploy"
commit_hash=$(git rev-parse --short HEAD)
commit_message="Automated deployment from $commit_hash"
remote_name="origin"

# Build the project
if ! pnpm $build_command; then
  echo "Build failed"
  exit 1
fi

# Create deploy branch if it doesn't exist
if ! git show-ref --verify --quiet "refs/heads/$deploy_branch"; then
  git branch $deploy_branch
fi

# Checkout the deploy branch
git checkout $deploy_branch

# Remove all files not in .git or in the build directory
find . -maxdepth 1 ! -name '.git' ! -name ".gitignore" ! -name "$build_dir" ! -name '.' -exec rm -rf {} \;

# Copy the build files to the root directory
cp -r $build_dir/* .

# Add all files to git
git add .

# Remove files that were deleted during the build
git add -u

# Commit the changes
git commit -m "$commit_message"

# Push the changes to the remote
git push $remote_name $deploy_branch

# Checkout the previous branch
git checkout -

# Delete build directory
rm -rf $build_dir
