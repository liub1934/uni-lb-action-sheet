# 进入生成的文件夹
cd unpackage/dist/build/h5

git init
git add -A
git commit -m 'deploy'

git config --local user.name "liub1934"
git config --local user.email "liub1934@gmail.com"

# 发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:liub1934/uni-lb-action-sheet.git master:gh-pages