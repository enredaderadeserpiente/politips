class CorsMiddleware(object):
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)

        response['Access-Control-Allow-Origin'] = request.META.get('HTTP_ORIGIN')
        response['Access-Control-Allow-Credentials'] = 'true'

        if request.method == 'OPTIONS':
            response['Access-Control-Allow-Headers'] = request.META.get('HTTP_ACCESS_CONTROL_REQUEST_HEADERS')

        return response

