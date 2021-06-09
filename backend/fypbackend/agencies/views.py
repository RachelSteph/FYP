from rest_framework import generics
from django.shortcuts import render
from .models import AgencyProfile, AgencyExpertise
from .serializers import AgencyProfileSerializer, AgencyExpertiseSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import viewsets
# Create your views here.


class AgencyProfileList(viewsets.ModelViewSet):
    queryset = AgencyProfile.objects.all()
    serializer_class = AgencyProfileSerializer
    permission_classes = [AllowAny]


class AgencyProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = AgencyProfile.objects.all()
    serializer_class = AgencyProfileSerializer


class AgencyExpertiseList(generics.ListCreateAPIView):
    queryset = AgencyExpertise.objects.all
    serializer_class = AgencyExpertiseSerializer


class AgencyExpertiseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = AgencyExpertise.objects.all()
    serializer_class = AgencyExpertiseSerializer
