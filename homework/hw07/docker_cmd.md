# Docker命令完整参考手册

## 容器生命周期管理

命令：docker run
说明：创建并启动新容器
-d: 后台运行
--name: 指定容器名称
-p: 端口映射(主机:容器)
-v: 卷挂载(主机:容器)
--rm: 退出后自动删除
-e: 设置环境变量
--network: 指定网络
示例：docker run -d -p 8080:80 --name web nginx
示例：docker run -it --rm alpine sh

命令：docker create
说明：创建但不启动容器
(参数同docker run)
示例：docker create --name test redis:alpine

命令：docker start/stop/restart
说明：启动/停止/重启容器
-a: 附加输出
-i: 附加输入
示例：docker stop -t 30 mycontainer

命令：docker pause/unpause
说明：暂停/恢复容器进程
示例：docker pause mycontainer

命令：docker rm
说明：删除容器
-f: 强制删除运行中容器
-v: 同时删除卷
示例：docker rm -fv old_container

命令：docker update
说明：更新容器配置
--cpus: CPU数量
--memory: 内存限制
--restart: 重启策略
示例：docker update --memory 1G myapp

## 镜像管理

命令：docker images
说明：列出本地镜像
-a: 显示所有层
-q: 仅显示ID
--digests: 显示摘要
示例：docker images --format "{{.ID}}: {{.Repository}}"

命令：docker pull
说明：拉取镜像
-a: 拉取所有标签
--platform: 指定平台
示例：docker pull --platform linux/arm64 alpine

命令：docker push
说明：推送镜像到仓库
--disable-content-trust: 跳过验证
示例：docker push myrepo/myimage:v1

命令：docker build
说明：构建镜像
-t: 指定标签
-f: 指定Dockerfile
--build-arg: 构建参数
示例：docker build -t myapp:v1 --build-arg ENV=prod .

命令：docker rmi
说明：删除镜像
-f: 强制删除
--no-prune: 保留父镜像
示例：docker rmi $(docker images -q)

命令：docker tag
说明：创建镜像标签
示例：docker tag nginx:latest mynginx:v1

命令：docker save/load
说明：保存/加载镜像
-o: 输出到文件
-i: 从文件读取
示例：docker save -o nginx.tar nginx:latest
示例：docker load -i nginx.tar

命令：docker export/import
说明：导出/导入容器文件系统
-o: 输出到文件
示例：docker export -o fs.tar mycontainer
示例：cat fs.tar | docker import - myimage:v1

命令：docker history
说明：查看镜像历史
--no-trunc: 完整输出
-H: 可读格式
示例：docker history --no-trunc nginx

## 容器操作与监控

命令：docker ps
说明：列出容器
-a: 显示所有容器
-f: 过滤(status=running/exited)
--format: 自定义格式
示例：docker ps -a --format "table {{.ID}}\t{{.Names}}"

命令：docker exec
说明：在容器内执行命令
-it: 交互模式
-u: 指定用户
-w: 工作目录
示例：docker exec -it -u root myapp bash

命令：docker logs
说明：查看容器日志
-f: 实时跟踪
--tail: 最后N行
--since: 特定时间后
示例：docker logs -f --tail 100 myapp

命令：docker stats
说明：实时资源监控
-a: 所有容器
--format: 格式化输出
示例：docker stats --format "table {{.Name}}\t{{.CPUPerc}}"

命令：docker top
说明：显示容器进程
示例：docker top mycontainer

命令：docker diff
说明：检查容器文件变化
示例：docker diff mycontainer

命令：docker port
说明：查看端口映射
示例：docker port mycontainer

命令：docker wait
说明：等待容器退出
示例：docker wait mycontainer

命令：docker attach
说明：附加到运行中容器
--no-stdin: 不附加输入
示例：docker attach mycontainer

## 网络管理

命令：docker network
说明：管理网络
ls: 列出网络
create: 创建网络
rm: 删除网络
connect/disconnect: 连接/断开容器
inspect: 查看详情
示例：docker network create --driver bridge mynet
示例：docker network connect mynet mycontainer

## 卷管理

命令：docker volume
说明：管理数据卷
create: 创建卷
ls: 列出卷
rm: 删除卷
prune: 清理未使用卷
示例：docker volume create mysqldata
示例：docker volume prune -f

## Swarm模式

命令：docker swarm
说明：Swarm集群管理
init: 初始化集群
join: 加入集群
leave: 离开集群
update: 更新配置
示例：docker swarm init --advertise-addr 192.168.1.100

命令：docker node
说明：管理节点
ls: 列出节点
promote/demote: 角色变更
rm: 移除节点
示例：docker node ls --format "table {{.ID}}\t{{.Hostname}}"

命令：docker service
说明：管理服务
create: 创建服务
scale: 扩缩容
ls: 列出服务
rm: 删除服务
示例：docker service create --name web -p 80:80 nginx
示例：docker service scale web=5

命令：docker stack
说明：堆栈管理
deploy: 部署堆栈
ls: 列出堆栈
rm: 删除堆栈
示例：docker stack deploy -c docker-compose.yml myapp

## 系统管理

命令：docker system
说明：系统维护
df: 磁盘使用情况
prune: 清理无用数据
events: 实时事件
info: 系统信息
示例：docker system df -v
示例：docker system prune -a -f

命令：docker info
说明：显示系统信息
-f: 格式化输出
示例：docker info --format '{{.ServerVersion}}'

命令：docker version
说明：显示版本信息
-f: 格式化输出
示例：docker version --format '{{.Server.Version}}'

## 安全相关

命令：docker login/logout
说明：仓库认证
-p: 密码(建议使用--password-stdin)
-u: 用户名
示例：cat password.txt | docker login -u user --password-stdin

命令：docker scan
说明：镜像安全扫描
--file: 指定Dockerfile
--severity: 过滤漏洞等级
示例：docker scan --file Dockerfile myimage

命令：docker secret
说明：管理敏感数据
create: 创建secret
ls: 列出secret
inspect: 查看详情
示例：echo "mypassword" | docker secret create db_pass -

命令：docker config
说明：管理配置
create: 创建配置
ls: 列出配置
示例：docker config create app.conf config.ini

## 其他实用命令

命令：docker cp
说明：容器与主机间复制文件
-L: 保留符号链接
示例：docker cp myapp:/app/logs ./logs

命令：docker rename
说明：重命名容器
示例：docker rename old_name new_name

命令：docker plugin
说明：管理插件
install: 安装插件
enable/disable: 启用/禁用
示例：docker plugin install vieux/sshfs

命令：docker context
说明：管理上下文
create: 创建上下文
use: 切换上下文
示例：docker context create remote --docker host=ssh://user@host

命令：docker builder
说明：构建管理
prune: 清理构建缓存
示例：docker builder prune -a -f

命令：docker manifest
说明：多架构镜像管理
create: 创建清单
annotate: 添加注释
push: 推送清单
示例：docker manifest create myapp:v1 myapp-x86:v1 myapp-arm64:v1

## 实验性命令

命令：docker checkpoint
说明：容器检查点(需启用实验特性)
create: 创建检查点
ls: 列出检查点
rm: 删除检查点
示例：docker checkpoint create mycontainer bk1

命令：docker trust
说明：镜像签名验证
sign: 签名镜像
inspect: 查看签名
示例：docker trust sign myimage:v1
