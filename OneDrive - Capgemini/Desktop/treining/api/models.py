from django.db import models

# Create your models here.

class Livro(models.Model):
    nome = models.CharField(max_length=50)
    autor =  models.CharField(max_length=50)