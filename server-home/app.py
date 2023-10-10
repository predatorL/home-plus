from flask import Flask
from flask_restful import Api
from flask_cors import CORS
# config
from config import MONGODB_SETTINGS
# db初始化
from database import init_db
# resources
from resources.user import UserResource, UserListResource
from resources.todo import TodoResource, TodolistResource
from resources.menu import MenuResource, MenuListResource

app = Flask(__name__)
cors = CORS(app)

app['config'] = {
    'MONGODB_SETTINGS': MONGODB_SETTINGS
}
# init db
db = init_db(app)
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