from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .serializers import LivroSerializers
from .models import Livro

class LivrosViewset(viewsets.ModelViewSet):
    queryset = Livro.objects.all()  # Defina o queryset
    permission_classes = [IsAuthenticated]
    serializer_class = LivroSerializers

    def get_queryset(self):
        # Filtra os livros com base no usuário autenticado
        return Livro.objects.filter(usuario=self.request.user)
