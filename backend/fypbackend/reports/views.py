from rest_framework import generics
from django.shortcuts import render
from .models import Report
from .serializers import ReportSerializer
# Create your views here.


class ReportList(generics.ListCreateAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer


class ReportDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
