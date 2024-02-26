from django.db import models


class Cliente(models.Model):
    nome = models.CharField(
        max_length=100,
        blank=False,
        null=False
    )

    email = models.EmailField(
        blank=False,
        null=False
    )

    telefone = models.IntegerField(
        blank=False,
        null=False
    )

    mensagem = models.CharField(
        max_length=280
    )

    def __str__(self):
        return self.nome
