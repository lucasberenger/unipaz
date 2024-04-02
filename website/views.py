import os
from django.shortcuts import render
from django.core.mail import send_mail
from django.core.exceptions import ValidationError
from django.views.decorators.cache import cache_page

DAYTIME_CACHE = 24 * 60 * 60

@cache_page(15)
def home(request):
    return render(request, 'home.html')

@cache_page(DAYTIME_CACHE)
def services(request):
    return render(request, 'services.html')

@cache_page(DAYTIME_CACHE)
def events(request):
    return render(request, 'events.html')

@cache_page(DAYTIME_CACHE)
def segurancaDoPatrimonio(request):
    return render(request, 'seguranca-do-patrimonio.html') 

@cache_page(DAYTIME_CACHE)
def escoltaArmada(request):
    return render(request, 'escolta-armada.html')

@cache_page(DAYTIME_CACHE)
def segurancaPessoal(request):
    return render(request, 'seguranca-pessoal.html')

@cache_page(DAYTIME_CACHE)
def segurancaEventos(request):
    return render(request, 'seguranca-de-eventos.html') 


def contact(request):
    if request.method=='POST':
        message_name = request.POST['name']
        message_email = request.POST['email']
        message_phone = request.POST['phone']
        message = request.POST['message']
        try:
            if not all([message_name, message_email, message_phone, message]):
                raise ValidationError('All fields must be completed!')
            email_title = 'Nova Mensagem para UNIPAZ!'
            email_body = f'Remetente: {message_name}\nEmail: {message_email}\nTelefone: {message_phone}\n\n{message}'
            email_sender = message_email
            email_recipiest = os.environ.get('EMAIL_UNIPAZ')
        
            send_mail(email_title, email_body, email_sender, [email_recipiest],)

            return render(request, 'contact_sent.html', {'message_name': message_name})
        except ValidationError as e:
            message_error = f'Error: {e}'
            print(message_error)
            return render(request, 'contact.html')
    else:
        return render(request, 'contact.html')

 
            

    
