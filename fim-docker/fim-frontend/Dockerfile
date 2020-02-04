FROM nginx

MAINTAINER gradyjiang "jiangzhongjin@hotmail.com"

ENV LANG C.UTF-8

# 当前父目录
ENV PARENT_DIR .

COPY $PARENT_DIR/dist/ /usr/share/nginx/html/

COPY $PARENT_DIR/nginx.conf /etc/nginx/nginx.conf

