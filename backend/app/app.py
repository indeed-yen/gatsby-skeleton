import falcon
from resources import HowtoHireResource


def build_app():
    api = falcon.API()
    api.add_route('/how_to_hire', HowtoHireResource())
    return api


app = build_app()
