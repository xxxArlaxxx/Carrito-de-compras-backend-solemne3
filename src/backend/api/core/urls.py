from django.urls import path
from api.core.apiviews import Persona, ListPersona, ListArticulo, Articulo, Carrito, ListArticulosCarrito
urlpatterns = [
    
    path('get/Persona/<persona_id>/', Persona.as_view()),
    path('post/Persona/', Persona.as_view()),
    path('delete/Persona/<persona_id>/', Persona.as_view()),
    path('get/list/Persona/', ListPersona.as_view()),
    path('get/list/articulos/', ListArticulo.as_view()),
    path('post/articulos/', Articulo.as_view()),
    path('delete/articulo/<articulo_id>/', Articulo.as_view()),
    path('add/carrito/', Carrito.as_view()),
    path('articulos/carrito/<usuario_id>/', ListArticulosCarrito.as_view()),
]
