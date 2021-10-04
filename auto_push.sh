#! /bin/bash

# 获取当前系统时间并自动把“vue”项目push到远程仓库
time=$(date "+%Y-%m-%d %H:%M:%S")
git add .
git commit -m "auto push in $time"
git push -u origin master

