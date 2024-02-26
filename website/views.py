from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
import json
from .models import Cliente


@csrf_exempt
@require_POST
def criar_cliente(request):
    dados_cliente = json.loads(request.body)

    novo_cliente = Cliente.objects.create(
        nome=dados_cliente['nome'],
        emial=dados_cliente['email'],
        telefone=dados_cliente['telefone'],
        mensagem=dados_cliente['mensagem']
    )

    assunto = 'Nova Mensagem de um cliente'
    mensagem = f'Nome: {dados_cliente['nome']}\nEmail: {dados_cliente['email']}\ntelefone: {dados_cliente['telefone']}\nMensagem: {dados_cliente['mensagem']}'

    destinatario = 'lucas@sjoseph.com.br'

    send_mail(assunto, mensagem, destinatario, fail_silently=False)

    return JsonResponse({'mensagem': 'Mensagem enviada com sucesso!'})