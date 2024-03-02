from rest_framework import serializers
from .models import Livro



class LivroSerializers(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='livro-detail', lookup_field='pk')
    
    class Meta:
        model = Livro
        fields = ['url', 'nome', 'autor', 'usuario']  # Adicione 'url' para o campo de relacionamento
