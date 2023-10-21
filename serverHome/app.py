from flask import Flask
from flask_restful import Api
from flask_cors import CORS

from resources import RecipeResource
from database import initialize_db, db

app = Flask(__name__)
cors = CORS(app)
# db
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:123456@localhost:3307/homePlus'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
initialize_db(app)
# 在应用上下文中初始化数据库表
with app.app_context():
    db.create_all()
# api
api = Api(app)
api.add_resource(RecipeResource, '/api/recipes')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)





