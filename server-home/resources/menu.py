from flask_restful import Resource
from flask import request
from datetime import datetime

from models.menu import Menu
from database import Database

class MenuResource(Resource):
    def get(self, id):
        return {'code': 1}
    
    def post(self, id):
        return {'code': 1}
    
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
