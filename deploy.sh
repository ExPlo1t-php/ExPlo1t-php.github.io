#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git branch -M gh-pages
git add -A
git commit -m 'deploy'


git push git@github.com:ExPlo1t-php/ExPlo1t-php.github.io.git 


cd -