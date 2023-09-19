from flask import Flask
from flask_restful import Api
# db初始化
from database import Database
# resources
from resources.user import UserResource, UserListResource
from resources.todo import TodoResource, TodolistResource
from resources.menu import MenuResource, MenuListResource

app = Flask(__name__)

# init db
Database(host='localhost', port=27017, db_name='home_plus', user='root', password='')
# api
api = Api(app)
# api-user
api.add_resource(UserResource,'/api/user')
api.add_resource(UserListResource,'/api/user/list')
# api-todo
api.add_resource(TodoResource,'/api/todo')
api.add_resource(TodolistResource,'/api/todo/list')
# api-menu
api.add_resource(MenuResource,'/api/menu')
api.add_resource(MenuListResource,'/api/menu/list')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)