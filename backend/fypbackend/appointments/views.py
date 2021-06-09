from rest_framework import generics
from django.shortcuts import render
from .models import Appointment
from .serializers import AppointmentSerializer
# Create your views here.


class AppointmentList(generics.ListCreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer


class AppointmentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
