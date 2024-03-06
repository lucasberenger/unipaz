from django.urls import path
from .views import HomePageView, CompanyServicesView, ContactView, EventsView

app_name = "website"

urlpatterns = [
    path('', HomePageView.as_view(), name='index'),
    path('servicos/', CompanyServicesView.as_view(), name='services'),
    path('contato/', ContactView.as_view(), name='contact'),
    path('eventos/', EventsView.as_view(), name='events'),
]