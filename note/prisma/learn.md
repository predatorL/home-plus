# 文档阅读笔记

## 安装
- npm install prisma --save-dev

## 初始化
- npx prisma init --datasource-provider sqlite

- npx prisma migrate dev --name init
```
该命令将会做三件事：
保存迁移：Prisma Migrate 将对你的 schema 创建快照，并生成执行迁移所需的 SQL 命令。Prisma 会将包含 SQL 命令的迁移文件保存到一个新建的 prisma/migrations 文件夹内。
执行迁移：Prisma Migrate 将执行迁移文件中的 SQL 命令以在数据库中创建底层数据表。
生成 Prisma Client：Prisma 将会基于你最新的 schema 文件生成 Prisma Client。如果你本地没有安装 Client 库文件，CLI 会自动为你安装。你会在 package.json 文件的 dependencies 中看到 @prisma/client 包。Prisma Client 是一个基于你的 Prisma schema 自动生成的 TypeScript 查询构建器。
```

## 本地客户端GUI(web版本)
> npx prisma studio