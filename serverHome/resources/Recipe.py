from flask_restful import Resource, reqparse
from app import db
from models.Recipe import RecipeModel
import pdb;

parser = reqparse.RequestParser()
parser.add_argument('name', type=str, required=True, help='Name is required')
parser.add_argument('description', type=str, required=True, help='Description is required')

class RecipeResource(Resource):
    def get(self, recipe_id=None):
        if recipe_id is None:
            recipes = RecipeModel.query.all()
            output = []
            for recipe in recipes:
                recipe_data = {'id': RecipeModel.id, 'name': RecipeModel.name, 'description': RecipeModel.description}
                output.append(recipe_data)
            return output
        else:
            recipe = RecipeModel.query.get(recipe_id)
            if recipe:
                return {'id': RecipeModel.id, 'name': RecipeModel.name, 'description': RecipeModel.description}
            else:
                return {'message': 'Recipe not found'}, 404

    def post(self):
        args = parser.parse_args()
        name = args['name']
        description = args['description']
        recipe = RecipeModel(name=name, description=description)
        db.session.add(recipe)
        db.session.commit()
        return {'message': 'Recipe created successfully'}, 201

    def put(self):
        args = parser.parse_args()
        name = args['name']
        recipeId = args['recipeId']
        description = args['description']
        
        pdb.set_trace()
        recipe = RecipeModel.query.get(recipeId)
        if recipe:
            RecipeModel.name = name
            RecipeModel.description = description
            db.session.commit()
            return {'message': 'Recipe updated successfully'}
        else:
            return {'message': 'Recipe not found'}, 404

    def delete(self, recipe_id):
        recipe = RecipeModel.query.get(recipe_id)
        if recipe:
            db.session.delete(recipe)
            db.session.commit()
            return {'message': 'Recipe deleted successfully'}
        else:
            return {'message': 'Recipe not found'}