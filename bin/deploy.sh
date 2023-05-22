#!/bin/bash

# Default values
build_command="build"
build_dir="dist"
deploy_branch="deploy"
remote_url="git@github.com:alexperronnet/openclassrooms-p13-argent-bank.git"
commit_message="Automatic build commit"

# Build the project
pnpm run $build_command

# Navigate to the build directory
cd $build_dir

# Initialize a new git repository if doesn't exist
if [ ! -d ".git" ]; then
    git init
fi

# Check if branch exists
if ! git rev-parse --verify $deploy_branch > /dev/null 2>&1; then
    git checkout --orphan $deploy_branch
    git rm -rf .
else
    git checkout $deploy_branch
fi

# Add all files
git add -A

# Commit changes
git commit -m "$commit_message"

# Push to the remote branch
git push -f $remote_url $deploy_branch

# Navigate back to the project root
cd -

# Delete the build directory
rm -rf $build_dir