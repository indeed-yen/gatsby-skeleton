import os
import falcon
from pymongo import MongoClient
from dao import HowtoHireDAO
from resources import HowtoHireResource

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
    return api


app = build_app()
