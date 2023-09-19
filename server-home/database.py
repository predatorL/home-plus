# 链接mongoDB数据库 
import pymongo
class Database:
    def __init__(self, host, port, db_name, user, password):
        self.host = host
        self.port = port
        self.db_name = db_name
        self.user = user
        self.password = password
        self.client = pymongo.MongoClient(host, port)
        self.db = self.client[db_name]
    def get_collection(self, collection_name):
        return self.db[collection_name]