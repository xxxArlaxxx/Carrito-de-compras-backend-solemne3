from django.urls import path, include
from apps.core import views
from .views import ArticuloList

urlpatterns = [
    path('', views.index, name='index'),
    path('articulos/', ArticuloList.as_view(), name='articulo-list'),
]