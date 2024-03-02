from rest_framework import serializers
from .models import Livro


class LivroSerializers(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        model = Livro
        fields = ('__all__')