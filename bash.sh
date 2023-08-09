# 1. Navigate to your repo folder
ls
cd <yourFolder>/<yourRepoFolder>
# 2. Clone repo and navigate into it
git clone https://github.com/<yourUsername>/<yourRepo>.git
cd <yourRepo>
# 3. Create and move to dev branch and push upstream
git checkout -b dev
git push --set-upstream origin dev
# 4. Create and move to feature branch
git checkout -b static-server
# 5. Create public and src directories
mkdir public src
# 6. Create .gitignore, server.js, public/index.html, public/home.html and src/app.js
touch .gitignore server.js public/index.html public/home.html src/app.js
# 7. Run npm init -y and npm install express
npm init -y
npm i express
# 8. Open folder in VS Code
.code
# Go to .gitignore

# 22. Git workflow
git add .
git commit -m "some message"
git push --set-upstream origin static-server