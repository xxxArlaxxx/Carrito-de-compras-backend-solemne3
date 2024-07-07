from rest_framework import serializers
from apps.core.models import Persona, Articulo

class PersonaSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    nombre = serializers.CharField() 
    f_nacimiento=serializers.CharField()
    ciudad = serializers.CharField()
    avatar = serializers.FileField()
    class Meta:
        model = Persona 

class ArticuloSerializer(serializers.Serializer):
    nombre = serializers.CharField()
    precio = serializers.IntegerField()
    cantidad = serializers.IntegerField()
    class Meta:
        model = Articulo
        fields = ['nombre', 'precio', 'cantidad']

    def create(self, validated_data):
        return Articulo.objects.create(**validated_data)