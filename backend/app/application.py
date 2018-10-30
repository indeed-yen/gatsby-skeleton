import os
import falcon
from pymongo import MongoClient
from src.dao import HowtoHireDAO
from src.resources import HowtoHireResource
from src.handlers.exception_handler import unexpected_error_handler


mongo_client = MongoClient(host=os.environ['MONGO_HOST'],
                           port=int(os.environ['MONGO_PORT']),
                           username=os.environ['MONGO_USERNAME'],
                           password=os.environ['MONGO_PASSWORD'],
                           authSource=os.environ['MONGO_AUTHDB'],
                           authMechanism=os.environ['AUTH_MECHANISM'])

db_connect = mongo_client.contents
howtohire_dao = HowtoHireDAO(db_connect)


def build_app():
    api = falcon.API()
    api.add_route('/how_to_hire/{id}', HowtoHireResource(howtohire_dao))
    api.add_error_handler(Exception, unexpected_error_handler)
    return api


app = build_app()
