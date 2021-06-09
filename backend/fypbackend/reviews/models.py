from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from agencies.models import AgencyProfile
from clients.models import ClientProfile

# Create your models here.


class Review(models.Model):
    agencyprofile = models.ForeignKey(AgencyProfile, on_delete=models.CASCADE)
    clientprofile = models.ForeignKey(ClientProfile, on_delete=models.CASCADE)
    comment = models.TextField()
    stars = models.PositiveSmallIntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(5)]
    )
