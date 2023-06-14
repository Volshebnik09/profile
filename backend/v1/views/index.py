from django.http import response
from django.views import View


class IndexView(View):

    @staticmethod
    def get(request):
        return response.HttpResponse(200)