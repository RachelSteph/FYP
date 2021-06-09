from rest_framework import serializers
from .models import ClientProfile


class ClientProfileSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = ClientProfile
