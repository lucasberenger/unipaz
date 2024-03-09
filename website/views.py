from django.shortcuts import render
from django.core.mail import send_mail
from django.core.exceptions import ValidationError
from decouple import config

def home(request):
    return render(request, 'home.html')

def services(request):
    return render(request, 'services.html')

def events(request):
    return render(request, 'events.html')

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
            email_recipiest = config('EMAIL_UNIPAZ')
        
            send_mail(email_title, email_body, email_sender, [email_recipiest],)

            return render(request, 'contact_sent.html', {'message_name': message_name})
        except ValidationError:
            message_error = 'Todos os campos devem ser preenchidos!'
            return render(request, 'contact.html', {'message_error': message_error} )
    else:
        return render(request, 'contact.html')
            

    
