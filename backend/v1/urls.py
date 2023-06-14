from django.urls import path

from v1.views.index import IndexView

urlpatterns = [
    path('', IndexView.as_view()),
]