from flask_restful import Resource
from flask import request
from datetime import datetime

class TodoResource(Resource):
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
    def post(self):# Compare this snippet from resources/menu.py:
        pass
    def put(self, id):
        pass
    def delete(self, id):
        pass

class TodolistResource(Resource):
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