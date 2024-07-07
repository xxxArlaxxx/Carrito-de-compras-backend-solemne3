from django.shortcuts import render
from apps.core.models import Articulo
from rest_framework import generics
from .serializers import ArticuloSerializer

def index(request):
    template_name = "index.html"
    context = {} 
    return render(request, template_name, context)

class ArticuloList(generics.ListCreateAPIView):
    queryset = Articulo.objects.all()
    serializer_class = ArticuloSerializer