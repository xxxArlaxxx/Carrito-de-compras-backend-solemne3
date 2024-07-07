from rest_framework import serializers
from apps.core.models import Persona, Articulo, ArticulosCarrito

class PersonaSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    nombre = serializers.CharField() 
    f_nacimiento=serializers.CharField()
    ciudad = serializers.CharField()
    avatar = serializers.FileField()
    class Meta:
        model = Persona 

class ArticuloSerializer(serializers.Serializer):
    id = serializers.IntegerField(required=False)
    nombre = serializers.CharField()
    precio = serializers.IntegerField()
    cantidad = serializers.IntegerField()
    fecha_actualizacion = serializers.DateTimeField(required=False)
    class Meta:
        model = Articulo

    def create(self, **validated_data):
        return Articulo.objects.create(validated_data)
    
class CarritoSerializer(serializers.Serializer):
    id = serializers.IntegerField(required=False)
    usuario = serializers.IntegerField()

class ArticulosCarritoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticulosCarrito
        fields = ('__all__')
