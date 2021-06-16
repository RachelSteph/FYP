from rest_framework import serializers
from .models import AgencyProfile


class AgencyProfileSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = AgencyProfile
