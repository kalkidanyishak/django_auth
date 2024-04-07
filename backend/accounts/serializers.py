from djoser.serializers import UserCreateSerializer, UserDeleteSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers

User=get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    model=User
    fields=('id', 'email', 'name', 'password')

class UserDeleteSerializer(UserDeleteSerializer):
    password = serializers.CharField(max_length=128, write_only=True, required=True)