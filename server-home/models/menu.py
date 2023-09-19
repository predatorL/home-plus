from database import Database

# 标题[string] 描述[string] 材料[list] 制作步骤[list] 备注[string] 评论 

class Menu(Database):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.collection = self.db.menu
        self.collection.create_index([('name', 1)], unique=True)
        self.collection.create_index([('user_id', 1)], unique=True)
    def create(self, name, user_id):
        self.collection.insert_one({'name': name, 'user_id': user_id})
        return True
    def delete(self, name, user_id):
        self.collection.delete_one({'name': name, 'user_id': user_id})
        return True
    def update(self, name, user_id, new_name):
        self.collection.update_one({'name': name, 'user_id': user_id}, {'$set': {'name': new_name}})
        return True
    def get_by_menu_id(self, menu_id):
        return self.collection.find_one({'_id': menu_id})
    def get_all(self):
        return self.collection.find()
    def get_by_name(self, name):
        return self.collection.find({'name': name})
    def get_by_user_id(self, user_id):
        return self.collection.find({'user_id': user_id})