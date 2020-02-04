cd ../portfoliov2
gatsby build
cd ../sm5art.github.io
cp -R ../portfoliov2/public/ .
git add .
git commit -m "deployment"
git push origin master
