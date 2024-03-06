from django.db import models
from django.contrib.auth.models import User, Group

# Create your models here.
class Lista(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    nome = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.nome


class Item(models.Model):
    list = models.ForeignKey(Lista, on_delete=models.CASCADE)
    nome = models.CharField(max_length=50)
    finalizado = models.BooleanField(default=False)
    def __str__(self) -> str:
        return self.nome