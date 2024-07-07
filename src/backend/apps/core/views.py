from django.shortcuts import render
from apps.core.models import Articulo
from rest_framework import generics, status
from rest_framework.views import APIView 
from rest_framework.response import Response 
from .serializers import ArticuloSerializer
from apps.core import utils

def index(request):
    template_name = "index.html"
    context = {} 
    return render(request, template_name, context)

class ArticuloList(generics.ListCreateAPIView):
    queryset = Articulo.objects.all()
    serializer_class = ArticuloSerializer

    def get(self,request):
        response = utils.traer_articulos(request)
        status_code = status.HTTP_404_NOT_FOUND if not response else status.HTTP_200_OK
        return Response(response, status_code)

    def post(self, request, format='json'):
        saved = utils.guardar_articulo(request.data)
        status_code = status.HTTP_200_OK if saved else status.HTTP_404_NOT_FOUND
        return Response(status=status_code)