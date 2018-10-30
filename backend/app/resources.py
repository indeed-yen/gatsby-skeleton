import falcon


class HowtoHireResource:
    def on_get(self, req, resp):
        resp.status = falcon.HTTP_200
        resp.body = ('\nWe Help People Get Jobs\n\n')
