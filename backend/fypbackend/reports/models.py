from django.db import models
from agencies.models import AgencyProfile

# Create your models here.


class Report(models.Model):
    agencyprofile = models.ForeignKey(AgencyProfile, on_delete=models.CASCADE)
    numberofprojects = models.PositiveIntegerField()
    date_issued = models.DateTimeField(auto_now_add=True)
