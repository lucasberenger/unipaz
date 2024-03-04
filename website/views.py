from django.views.generic import TemplateView
from django.core.mail import EmailMessage

class HomePageView(TemplateView):
    template_name = "home.html"

class CompanyServicesView(TemplateView):
    template_name = "servicos.html"

class ContactView(TemplateView):
    template_name = "contato.html"

class ContactEmail(EmailMessage):
    pass