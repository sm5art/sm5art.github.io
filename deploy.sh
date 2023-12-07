cd ../gatsby-starter-portfolio
yarn build
cd ../sm5art.github.io
cp -R ../gatsby-starter-portfolio/public/* .
git add .
git commit -m "deployment"
git push origin master
