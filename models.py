# models.py
from django.db import models

class Banner(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    imagem = models.ImageField(upload_to='banners/')
    preco = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.nome