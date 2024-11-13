set -e

echo "...Deployment Started"

git pull origin master 
echo "new changes copied to server!"

echo "Installing Dependencies.."
npm install --yes

echo "Creating Production Build..."
npm run build

echo "Deployment finished!"