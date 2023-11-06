# Debian with Python 3.8.12
# 我想要一个基于Debian的Python3.8.12镜像

# 1. 选择基础镜像
FROM python:3.8.12

# 2. 设置工作目录
WORKDIR /app

# 3. 将当前目录下的所有文件复制到工作目录下
COPY . /app

# 4. 安装依赖
RUN pip install -r requirements.txt

# 5. 暴露端口
EXPOSE 5000

# 6. 启动服务
CMD ["python", "app.py"]
