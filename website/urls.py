from django.urls import path
from . import views

app_name = 'website'

urlpatterns = [
    path('', views.home, name='home'),
    path('servicos/', views.services, name='services'),
    path('eventos/', views.events, name='events'),
    path('contato/', views.contact, name='contact'),
    path('seguranca-do-patrimonio/', views.segurancaDoPatrimonio, name='seguranca-do-patrimonio'),
    path('escolta-armada/', views.escoltaArmada, name='escolta-armada'),
    path('seguranca-pessoal/', views.segurancaPessoal, name='seguranca-pessoal'),
    path('seguranca-de-eventos/', views.segurancaEventos, name='seguranca-de-eventos'),
]