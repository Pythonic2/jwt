from django.shortcuts import render
from .serializers import LivroSerializers
from .models import Livro
from rest_framework import viewsets

from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import IsAuthenticated


class LivrosViewset(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Livro.objects.all()
    serializer_class = LivroSerializers
# Create your views here.
