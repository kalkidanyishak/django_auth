from django.urls import path
from .views import *

urlpatterns = [
    path('create-complaint/', create_complaint, name='create_complaint'),
     path('complaints/', list_complaints, name='list_complaints'),
]
