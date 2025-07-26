# 第15章作业

## 作业 1

使用 FastGPT 在线版完成雪茄百科和 AI 行政助理应用的开发，并优化问题分类描述和提示词，使得 AI 行政助理可以高效回答新员工提问（可适当补充公司手册内容）。

### 雪茄百科

#### 1. 使用 [雪茄知识](雪茄知识.md) 构建知识库

![cigar-ds-01](images/cigar-ds-01.jpg)
![cigar-ds-02](images/cigar-ds-02.jpg)
![cigar-ds-03](images/cigar-ds-03.jpg)
![cigar-ds-04](images/cigar-ds-04.jpg)
![cigar-ds-05](images/cigar-ds-05.jpg)
![cigar-ds-06](images/cigar-ds-06.jpg)
![cigar-ds-07](images/cigar-ds-07.jpg)
![cigar-ds-08](images/cigar-ds-08.jpg)

#### 2. 构建雪茄助手

![cigar-agent-01](images/cigar-agent-01.jpg)
![cigar-agent-02](images/cigar-agent-02.jpg)
![cigar-agent-03](images/cigar-agent-03.jpg)
![cigar-agent-04](images/cigar-agent-04.jpg)
![cigar-agent-05](images/cigar-agent-05.jpg)
![cigar-agent-06](images/cigar-agent-06.jpg)
![cigar-agent-07](images/cigar-agent-07.jpg)
![cigar-agent-08](images/cigar-agent-08.jpg)

#### 3. 与雪茄助手聊天

![cigar-agent-chat-01](images/cigar-agent-chat-01.jpg)
![cigar-agent-chat-02](images/cigar-agent-chat-02.jpg)

### 行政助理

#### 1. 补充公司手册内容

使用大模型将原 **[公司手册](公司手册.md)** 补充为 **[公司手册-v2](公司手册-v2.md)**

#### 2. 使用 [公司手册-v2](公司手册-v2.md) 构建知识库
>
> 步骤与[雪茄百科-构建知识库](#1-使用-雪茄知识-构建知识库)的类似，下面只展示不同的步骤

![assistant-ds-01](images/assistant-ds-01.jpg)

#### 3. 构建行政助理
>
> 步骤与[构建雪茄助手](#2-构建雪茄助手)的类似，下面只展示不同的步骤

![assistant-agent-02](images/assistant-agent-02.jpg)
![assistant-agent-03](images/assistant-agent-03.jpg)
![assistant-agent-04](images/assistant-agent-04.jpg)
![assistant-agent-05](images/assistant-agent-05.jpg)
![assistant-agent-06](images/assistant-agent-06.jpg)

#### 4. 与行政助理对话

![assistant-agent-chat-02](images/assistant-agent-chat-02.jpg)

## 作业2

使用 Docker Compose 完成 FastGPT 私有化部署，并使用私有化版本完成 AI 行政助理的开发。

### 使用 Docker Compose 完成 FastGPT 私有化部署

#### 1. 调整部署文件

* 参考[官方文档](https://doc.fastgpt.cn/docs/introduction/development/docker)下载 [config.json](fastgpt/config.json) 和 [docker-compose-pgvector.yaml](fastgpt/docker-compose.yml) 文件
* 根据情况适当调整 [docker-compose-pgvector.yaml](fastgpt/docker-compose.yml) 文件

#### 2. 在终端，进入 [docker-compose-pgvector.yaml](fastgpt/docker-compose.yml) 文件所在的文件夹，执行 `docker compose up -d` 命令

![fastgpt-deploy-01](images/fastgpt-deploy-01.jpg)
![fastgpt-deploy-02](images/fastgpt-deploy-02.jpg)

#### 3. 运行 `docker compose ps` 查看容器运行情况

![fastgpt-deploy-03](images/fastgpt-deploy-03.jpg)

#### 4. 浏览器输入 [http://localhost:3000](http://localhost:3000) 能够登录并进入主页面，说明部署成功
>
> 默认配置，用户名：root，密码：1234
>
![fastgpt-deploy-04](images/fastgpt-deploy-04.jpg)
![fastgpt-deploy-05](images/fastgpt-deploy-05.jpg)

### 使用私有化版本完成 AI 行政助理的开发

#### 1. 配置模型
>
> 以阿里千问模型为例子，模型具体可以参阅[阿里云百炼官方](https://bailian.console.aliyun.com/#/home)

![fastgpt-local-config-01](images/fastgpt-local-config-01.jpg)
![fastgpt-local-config-02](images/fastgpt-local-config-02.jpg)
![fastgpt-local-config-03](images/fastgpt-local-config-03.jpg)
![fastgpt-local-config-04](images/fastgpt-local-config-04.jpg)

#### 2. 配置知识库
>
> 参考 [作业1：使用-公司手册-v2-构建知识库](#2-使用-公司手册-v2-构建知识库)

![fastgpt-local-assistant-ds-01](images/fastgpt-local-assistant-ds-01.jpg)

#### 3. 构建应用并发起聊天
>
> 参考[作业1: 构建行政助理](#3-构建行政助理)

![fastgpt-local-assistant-chat-01](images/fastgpt-local-assistant-chat-01.jpg)
