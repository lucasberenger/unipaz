from django.urls import path
from . import views

app_name = 'website'

urlpatterns = [
    path('', views.home, name='home'),
    path('servicos/', views.services, name='services'),
    path('eventos/', views.events, name='events'),
    path('contato/', views.contact, name='contact'),
]