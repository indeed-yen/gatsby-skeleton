from src.utils.json_status_codes import JsonStatus


class ResponseMediaBuilder:

    @staticmethod
    def build_success_response(data=None):
        return {
            "status": "success",
            "code": JsonStatus.SUCCESS,
            "data": data if data is not None else {}
        }

    @staticmethod
    def build_fail_response(code, message, request):
        return {
            "status": "error",
            "code": code,
            "data": {
                "message": message,
                "request": str(request)
            }
        }