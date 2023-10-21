from flask_restful import Resource, reqparse
from database import db
from models import RecipeModel
import pdb;
parser = reqparse.RequestParser()
parser.add_argument('name', type=str, required=False, help='Name is required')
parser.add_argument('description', type=str, required=False, help='description is required')
parser.add_argument('recipeId', type=str, required=False, help='recipeId is required')

class RecipeResource(Resource):
    def get(self, recipe_id=None):
        if recipe_id is None:
            recipes = RecipeModel.query.all()
            output = []
            for recipe in recipes:
                recipe_data = {'id': recipe.id, 'name': recipe.name, 'description': recipe.description}
                output.append(recipe_data)
            return output
        else:
            recipe = RecipeModel.query.get(recipe_id)
            if recipe:
                return {'id': recipe.id, 'name': recipe.name, 'description': recipe.description}
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
        pdb.set_trace()
        recipeId = args['recipeId']
        name = args['name']
        description = args['description']
        recipe = RecipeModel.query.get(recipeId)
        if recipe:
            recipe.name = name
            recipe.description = description
            db.session.commit()
            return { 'data': recipe.to_dict(), 'message': 'Recipe updated successfully'}
        else:
            return {'message': 'Recipe not found'}, 404

    def delete(self):
        args = parser.parse_args()
        recipeId = args['recipeId']
        recipe = RecipeModel.query.get(recipeId)
        if recipe:
            db.session.delete(recipe)
            db.session.commit()
            return {'message': 'Recipe deleted successfully'}
        else:
            return {'message': 'Recipe not found'}