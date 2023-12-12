export PATH=$NODEJS_16_3_0_BIN:$PATH
export PATH=$PATH:$(yarn bin)

set -e

echo "node $(node -v)"
echo "npm $(npm -v)"
echo "yarn $(yarn -v)"

rm -rf dist output

yarn install --production=false
# yarn test
yarn run build || { echo 'build failed'; exit 1; }

mkdir output
cp ./conf/* ./output || echo "no conf to copy"
cd dist
tar czf ../output/bundle.tar.gz ./

cd ..
echo "build success"
