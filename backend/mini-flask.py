
# using flask_restful 
from flask import Flask, jsonify, request 
from flask_restful import Resource, Api 
from flask_cors import CORS, cross_origin
import json
with open('backend/config.json') as json_file:
    config = json.load(json_file)

# creating the flask app 
app = Flask(__name__) 
# creating an API object 
api = Api(app) 
cors = CORS(app)

# making a class for a particular resource 
# the get, post methods correspond to get and post requests 
# they are automatically mapped by flask_restful. 
# other methods include put, delete, etc. 
class Hello(Resource): 
  
    # corresponds to the GET request. 
    # this function is called whenever there 
    # is a GET request for this resource 
    def get(self): 
  
        return jsonify({'message': 'hello world'}) 
  
    # Corresponds to POST request 
    def post(self): 
          
        data = request.get_json()     # status code 
        return jsonify({'data': data}), 201
  
  
# another resource to calculate the square of a number 
class Square(Resource): 
  
    def get(self, num): 
  
        return jsonify({'square': num**2}) 
  
class Config(Resource):

    def get(self):
        return jsonify({'config': config})


# adding the defined resources along with their corresponding urls 
api.add_resource(Hello, '/') 
api.add_resource(Square, '/square/<int:num>') 
api.add_resource(Config,'/config')
  
  
# driver function
if __name__ == '__main__': 
  
    app.run(debug = True, host= '0.0.0.0')
