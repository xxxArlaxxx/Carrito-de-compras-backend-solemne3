from apps.core.models import Persona, Articulo, Carrito, ArticulosCarrito
from apps.core.serializers import PersonaSerializer, ArticuloSerializer, ArticulosCarritoSerializer
from django.http import Http404


def get_name(i=None):
    if i is not None:
        try:
            i = int(i)
            p = Persona.objects.get(id=i)
            return PersonaSerializer(p).data
        except Exception as e:
            print(e)
            raise Http404
    else:
        raise Http404

def traer_personas(request):
    p = Persona.objects.all()
    return PersonaSerializer(p, context={"request": request}, many=True).data

def guardar_persona(**kwargs):
    if 'nombre' in kwargs and kwargs.get('nombre') != "" and type(kwargs.get('nombre')) == str:
        p = Persona.objects.create(name = kwargs.get('nombre'))
        p.f_nacimiento = kwargs.get('f_nacimiento') if 'f_nacimiento' in kwargs else None
        p.ciudad = kwargs.get('ciudad') if 'ciudad' in kwargs else None
        p.avatar = kwargs.get('avatar') if 'avatar' in kwargs else None
        p.save()
        return True
    else:
        return False
    
def borrar_persona(i=None):
    if i is not None:
        try:
            i = int(i)
            Persona.objects.get(id=i).delete()
            return True
        except Exception as e:
            print(e)
            raise Http404
    else:
        raise Http404


def traer_articulos(request):
    p = Articulo.objects.all()
    return ArticuloSerializer(p, context={"request": request}, many=True).data

def guardar_articulo(kwargs):
    if 'nombre' in kwargs and kwargs.get('nombre') != "" and type(kwargs.get('nombre')) == str:
        p = Articulo.objects.create(nombre = kwargs.get('nombre'))
        p.precio = kwargs.get('precio') if 'precio' in kwargs else None
        p.cantidad = kwargs.get('cantidad') if 'cantidad' in kwargs else None
        p.save()
        return True
    else:
        return False
def borrar_articulo(i=None):
    if i is not None:
        try:
            i = int(i)
            Articulo.objects.get(id=i).delete()
            return True
        except Exception as e:
            print(e)
            raise Http404
    else:
        raise Http404
    
# CARRITO
def guardar_carrito(kwargs):
    persona_id = Persona.objects.get(id = kwargs.get('usuario'))
    if persona_id:
        carrito = Carrito.objects.filter(usuario=persona_id).first()
        if carrito: #tiene carrito
            articulo_id = Articulo.objects.get(id = kwargs.get('articulo'))
            articulo_en_carrito = ArticulosCarrito.objects.filter(articulo = articulo_id).first()
            if articulo_en_carrito:
                articulo_en_carrito.cantidad = kwargs.get('cantidad')
                articulo_en_carrito.save()
            else:
                ArticulosCarrito.objects.create(carrito=carrito, articulo = articulo_id, cantidad = kwargs.get('cantidad'))
            print("Este usuario ya tiene carrito")
        else: #no tiene carrito, se crea uno
            carrito = Carrito.objects.create(usuario=persona_id)
            print("Este usuario no tiene carrito")
    else:
        print("persona no registrada")

def mostrar_articulos_carrito(i = None):
    if i is not None:
        usuario_id = Persona.objects.get(id=i)
        carrito_id = Carrito.objects.filter(usuario = usuario_id).first()

        if carrito_id:
            articulos_carrito = ArticulosCarrito.objects.filter(carrito = carrito_id)

            if articulos_carrito:
                
                data = [
                    {
                        'articulo_id': articulo.articulo.id,
                        'articulo_nombre': articulo.articulo.nombre,
                        'articulo_cantidad': articulo.articulo.cantidad,
                        'articulo_precio': articulo.articulo.precio
                    }
                    for articulo in articulos_carrito
                ]
                return data
    else:
        raise Http404