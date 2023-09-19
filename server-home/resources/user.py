# 从flask_restful导入resource模块 
from flask_restful import Resource

# 定义一个名为"UsersResource"的资源类，继承自flask_restful.Resource类,
# 实现GET、POST、PUT、DELETE等方法  
class UserResource(Resource):
    def get(self):
        return {'hello': 'get world'}
    def post(self):
        return {'hello': 'post world'}
    def put(self):
        return {'hello': 'put world'}
    def delete(self):
        return {'hello': 'world'}

class UserListResource(Resource):
    def get(self):
        return {'hello': 'get list'}