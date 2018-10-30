import falcon


class HowtoHireResource:
    def __init__(self, DAO):
        self.dao = DAO

    def on_get(self, req, resp, id):
        resp.status = falcon.HTTP_200
        resp.body = self.dao.get_doc_by_id(id)
