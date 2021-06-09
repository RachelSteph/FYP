from django.db import models
from agencies.models import AgencyProfile
from clients.models import ClientProfile


# Create your models here.
class Project(models.Model):
    PROJECT_STATUS = (
        ('INC', 'Incomplete'),
        ('COMP', 'Complete'),
    )

    agencyprofile = models.ForeignKey(AgencyProfile, on_delete=models.CASCADE)
    clientprofile = models.ForeignKey(ClientProfile, on_delete=models.CASCADE)
    project_description = models.TextField()
    project_startdate = models.DateField()
    project_enddate = models.DateField()
    project_status = models.CharField(
        max_length=4, choices=PROJECT_STATUS)
