from src.utils.http_status_codes import HTTPStatus
from src.utils.response_media_builder import ResponseMediaBuilder
from src.utils.json_status_codes import JsonStatus


def unexpected_error_handler(exc, request, response, params):
    response.status = HTTPStatus.INTERNAL_SERVER_ERROR
    response.media = \
        ResponseMediaBuilder.build_fail_response(
            JsonStatus.UNEXPECTED_ERROR,
            "An unexpected error occurred with type: {t} and message: {m}".format(t=type(exc), m=str(exc)),
            request)