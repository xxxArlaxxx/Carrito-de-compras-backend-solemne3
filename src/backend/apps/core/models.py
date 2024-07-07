from django.db import models

class Persona(models.Model):
    nombre = models.CharField(max_length=50)
    f_nacimiento = models.DateField(blank=True, null=True)
    ciudad = models.CharField(max_length=50, blank=True, null=True)
    avatar = models.FileField(upload_to='avatars/', max_length=100, blank=True, default='avatars/default.jpg')

class Articulo(models.Model):
    nombre = models.CharField(max_length=255, null=True, blank=True)
    precio = models.IntegerField(null=True, blank=True)
    cantidad = models.IntegerField(null=True, blank=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True, null=True, blank=True)

    id = models.AutoField(primary_key=True)

class Carrito(models.Model):
    usuario = models.ForeignKey(Persona, on_delete=models.CASCADE, unique=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True, null=True, blank=True)

class ArticulosCarrito(models.Model):
    carrito = models.ForeignKey(Carrito, on_delete= models.CASCADE)
    articulo = models.ForeignKey(Articulo, on_delete= models.CASCADE)
    cantidad = models.IntegerField(null=True, blank=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True, null=True, blank=True)