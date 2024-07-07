from django.urls import path
from api.core.apiviews import Persona, ListPersona, ListArticulo, Articulo
urlpatterns = [
    
    path('get/Persona/<persona_id>/', Persona.as_view()),
    path('post/Persona/', Persona.as_view()),
    path('delete/Persona/<persona_id>/', Persona.as_view()),
    path('get/list/Persona/', ListPersona.as_view()),
    path('get/list/Articulo/', ListArticulo.as_view()),
    path('post/Articulo/', Articulo.as_view()),
]