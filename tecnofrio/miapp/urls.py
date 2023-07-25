# miapp/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),  # Here 'name' is used for naming the URL pattern
    # You can add more URL patterns here if needed
]