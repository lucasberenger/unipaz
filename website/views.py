from django.views.generic import TemplateView

class HomePageView(TemplateView):
    template_name = "home.html"

class CompanyServicesView(TemplateView):
    template_name = "servicos.html"

class ContactView(TemplateView):
    template_name = "contato.html"

class EventsView(TemplateView):
    template_name = "eventos.html"  