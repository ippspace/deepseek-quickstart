# Docker compose 命令参考手册

命令：docker compose up
说明：构建并启动所有服务容器
-d: 后台运行容器
--build: 强制重新构建镜像
--force-recreate: 强制重新创建容器
--no-deps: 不启动依赖的服务
--scale SERVICE=NUM: 设置服务实例数量
示例：docker compose up -d
示例：docker compose up --build web

命令：docker compose down
说明：停止并移除容器、网络、卷
--volumes: 同时删除数据卷
--rmi all: 删除所有相关镜像
--remove-orphans: 删除未在配置中定义的容器
示例：docker compose down -v
示例：docker compose down --rmi all

命令：docker compose ps
说明：列出项目容器状态
-q: 仅显示容器ID
--services: 显示服务名称
--filter STATUS=running: 按状态过滤
示例：docker compose ps
示例：docker compose ps -q

命令：docker compose logs
说明：查看容器日志
-f: 实时跟踪日志
--tail=N: 显示最后N行
--no-color: 禁用彩色输出
示例：docker compose logs -f
示例：docker compose logs --tail=100 web

命令：docker compose exec
说明：在运行中的容器执行命令
-d: 后台执行
--user USER: 指定用户
-T: 禁用伪终端
示例：docker compose exec web bash
示例：docker compose exec -u root db mysql -uroot -p

命令：docker compose build
说明：构建或重新构建服务镜像
--no-cache: 不使用缓存
--pull: 总是尝试拉取新镜像
--build-arg KEY=VAL: 设置构建参数
示例：docker compose build
示例：docker compose build --no-cache app

命令：docker compose pull
说明：拉取服务依赖的镜像
--ignore-pull-failures: 忽略拉取错误
--quiet: 静默模式
示例：docker compose pull
示例：docker compose pull --ignore-pull-failures

命令：docker compose restart
说明：重启服务容器
-t TIMEOUT: 停止超时时间(秒)
示例：docker compose restart
示例：docker compose restart -t 30 web

命令：docker compose rm
说明：删除停止的容器
-f: 强制删除运行中的容器
-v: 同时删除卷
示例：docker compose rm
示例：docker compose rm -fv

命令：docker compose config
说明：验证并查看配置
--services: 列出所有服务
--volumes: 列出所有卷
-q: 仅验证不输出
示例：docker compose config
示例：docker compose config --services

命令：docker compose run
说明：一次性运行服务容器
--rm: 运行后删除容器
--no-deps: 不启动依赖服务
-e KEY=VAL: 设置环境变量
示例：docker compose run --rm web python manage.py test
示例：docker compose run -e DEBUG=1 app

命令：docker compose pause/unpause
说明：暂停/恢复容器
示例：docker compose pause
示例：docker compose unpause web

命令：docker compose kill
说明：强制停止容器
-s SIGNAL: 指定信号(如SIGKILL)
示例：docker compose kill
示例：docker compose kill -s SIGINT

命令：docker compose create
说明：创建容器但不启动
--force-recreate: 强制重建
--no-build: 不构建镜像
示例：docker compose create
示例：docker compose create --force-recreate

命令：docker compose port
说明：显示端口绑定
--protocol=proto: 指定协议(tcp/udp)
--index=index: 指定容器索引
示例：docker compose port web 80
示例：docker compose port --index=2 db 3306

命令：docker compose images
说明：列出项目使用的镜像
-q: 仅显示镜像ID
示例：docker compose images
示例：docker compose images -q

命令：docker compose top
说明：显示容器进程
示例：docker compose top
示例：docker compose top web

命令：docker compose events
说明：实时查看容器事件
--json: JSON格式输出
示例：docker compose events
示例：docker compose events --json

命令：docker compose version
说明：显示版本信息
--short: 简短输出
示例：docker compose version
示例：docker compose version --short
