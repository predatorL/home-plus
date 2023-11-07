# 环境安装
## 虚拟环境
* 创建
> python3 -m venv venv
* 激活
> source venv/bin/activate
* 离开虚拟环境
> deactivate
* 安装依赖
> pip install -r requirements.txt

## 运行环境
### mysql
* 初始化homePlus
```
sudo docker exec -it <id or name> sh
mysql -u root -p
create database homePlus;
```

## 调试
[内置Debug工具 pdb快捷使用说明](https://zhuanlan.zhihu.com/p/37294138)