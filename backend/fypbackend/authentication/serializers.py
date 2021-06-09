from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from .models import CustomUser
from rest_framework.permissions import IsAuthenticated
from django.db import models

from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)


''' class CustomUserSerializer(serializers.ModelSerializer):
    
    Currently unused in preference of the below.
    
    # email = serializers.EmailField(
    #     required=True
    # )
    # username = serializers.CharField()
    # password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = CustomUser
        fields = ('email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    # def create(self, validated_data):
    #     password = validated_data.pop('password', None)
    #     # as long as the fields are the same, we can just use this
    #     instance = self.Meta.model(**validated_data)
    #     if password is not None:
    #         instance.set_password(password)
    #     instance.save()
    #     return instance

    # def validate_password(self, value: str) -> str:
    #     return make_password(value)
    # """
    # Hash value passed by user.

    # :param value: password of a user
    # :return: a hashed version of the password
    '''

# Register serializer


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'password')
        extra_kwargs = {
            'password': {'write_only': True},
        }

        def create(self, validated_data):
            user = CustomUser.objects.create_user(validated_data['username'],
                                                  password=validated_data['password'],
                                                  )
            return user


# User serializer

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'
