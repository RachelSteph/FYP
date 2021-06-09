from rest_framework import serializers
from .models import AgencyProfile, AgencyExpertise


class AgencyProfileSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = AgencyProfile


class AgencyExpertiseSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = AgencyExpertise
