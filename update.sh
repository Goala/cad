#!/bin/bash
git fetch;
if ! git diff --quiet remotes/origin/HEAD; then
  echo "Changes detected. Deploying new Version";
  ./buildAndDeploy.sh
else 
  echo "No changes detected.";
fi