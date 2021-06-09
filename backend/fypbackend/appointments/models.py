from django.db import models
from agencies.models import AgencyProfile
from clients.models import ClientProfile

# Create your models here.


class Appointment(models.Model):
    agencyprofile = models.ForeignKey(AgencyProfile, on_delete=models.CASCADE)
    clientprofile = models.ForeignKey(ClientProfile, on_delete=models.CASCADE)
    description = models.TextField()
    appointment_time = models.DateTimeField()
    date_issued = models.DateTimeField(auto_now_add=True)
