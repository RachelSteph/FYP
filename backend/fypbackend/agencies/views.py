from rest_framework import generics
from django.shortcuts import render
from .models import AgencyProfile
from .serializers import AgencyProfileSerializer
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
