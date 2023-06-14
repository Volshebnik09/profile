from django.urls import path

from admin.views.index.index import IndexView

urlpatterns = [
    path('', IndexView.as_view()),
]