from tokenize import Token 
from rest_framework import status , generics
from rest_framework.views import APIView 
from rest_framework.response import Response 
from apps.core import utils

class Persona(APIView):
    def get(self,request, persona_id):
        response = utils.get_name(persona_id)
        status_code = status.HTTP_404_NOT_FOUND if not response else status.HTTP_200_OK
        return Response(response, status_code)
    
    def post(self, request, format='json'):
        saved = utils.guardar_persona(request.data)
        status_code = status.HTTP_200_OK if saved else status.HTTP_404_NOT_FOUND
        return Response(status=status_code)
    
    def update():
        pass
    
    def delete(self, resquest, persona_id):
        deleted = utils.borrar_persona(persona_id)
        status_code = status.HTTP_200_OK if deleted else status.HTTP_404_NOT_FOUND
        return Response(status=status_code)
    
class ListPersona(APIView):
    def get(self,request):
        response = utils.traer_personas(request)
        status_code = status.HTTP_404_NOT_FOUND if not response else status.HTTP_200_OK
        return Response(response, status_code)

# ARTICULOS
class Articulo(APIView):
    def post(self, request, format='json'):
        saved = utils.guardar_articulo(request.data)
        status_code = status.HTTP_200_OK if saved else status.HTTP_404_NOT_FOUND
        return Response(status=status_code)
    
    def delete(self, request, articulo_id):
        print(articulo_id)
        deleted = utils.borrar_articulo(articulo_id)
        status_code = status.HTTP_200_OK if deleted else status.HTTP_404_NOT_FOUND
        return Response(status=status_code)
    
class ListArticulo(generics.ListCreateAPIView):
    def get(self,request):
        response = utils.traer_articulos(request)
        status_code = status.HTTP_404_NOT_FOUND if not response else status.HTTP_200_OK
        return Response(response, status_code)
    
# CARRITO
class Carrito(APIView):
    def post(self, request, format='json'):
        saved = utils.guardar_carrito(request.data)
        status_code = status.HTTP_200_OK if saved else status.HTTP_404_NOT_FOUND
        return Response(status=status_code)
    
class ListArticulosCarrito(generics.ListCreateAPIView):
    def get(self, request, usuario_id):
        response = utils.mostrar_articulos_carrito(usuario_id)
        status_code = status.HTTP_404_NOT_FOUND if not response else status.HTTP_200_OK
        return Response(response, status_code)