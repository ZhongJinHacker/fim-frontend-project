echo "开始构建 fim-frontend 镜像..."

cp -rp ../dist ./fim-frontend

docker build -t fim-frontend:1.0 ./fim-frontend

rm -rf ./fim-frontend/dist