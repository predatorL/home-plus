from flask_restful import Resource
from flask import request
from datetime import datetime

from models.menu import Menu

class MenuResource(Resource):
    def get(self, id):
        return {'code': 1}
    
    def post(self):
        # 获取所有请求参数 data
        data = request.get_json()
        # 存入menu集合 data
        name = data.get('name')
        description = data.get('description')
        create_time = datetime.now()
        Menu.create(name, description, create_time)
        return {'code': 1, 'data': data, 'message':'success'}
    
    def put(self, id):
        pass
    
    def delete(self, id):
        pass

class MenuListResource(Resource):
    def get(self):
        
        return {
            'code': 1,
            'data': {
                'list': [],
                "pagination": {
                    'pageNum': 1,
                }
            }
        }
