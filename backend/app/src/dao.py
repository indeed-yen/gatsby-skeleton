import json


class HowtoHireDAO:

    def __init__(self, dbconnect):
        self._dbconnect = dbconnect.how_to_hire

    def get_doc_by_id(self, id):
        doc = self._dbconnect.find_one({"_id": id})
        return json.dumps(doc)
