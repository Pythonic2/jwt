from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Livro(models.Model):
    nome = models.CharField(max_length=50)
    autor =  models.CharField(max_length=50)
    ano = models.CharField(max_length=30,default='2023')
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)


    def __str__(self) -> str:
        return self.nome
