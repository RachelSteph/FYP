from django.conf import settings
from django.db import models


# Create your models here.


class AgencyProfile(models.Model):
    name = models.CharField(max_length=250)
    email = models.EmailField(unique=True)
    address = models.CharField(max_length=100)
    description = models.TextField()
    experienceyears = models.PositiveIntegerField()
    date_created = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,)

    class Meta:
        verbose_name_plural = 'Agency Profiles'

    def __str__(self):
        return self.name


class AgencyContacts(models.Model):
    agencyprofile = models.ForeignKey(AgencyProfile, on_delete=models.CASCADE)
    phonenumber = models.CharField(max_length=13)

    class Meta:
        verbose_name_plural = 'Agency Contacts'


class AgencyExpertise(models.Model):
    EXPERTISE_CATEGORIES = (
        ('IT', 'Information Technology'),
        ('BP', 'Business Planning'),
    )
    agencyprofile = models.ForeignKey(AgencyProfile, on_delete=models.CASCADE)

    expertise_categories = models.CharField(
        max_length=2, choices=EXPERTISE_CATEGORIES)

    class Meta:
        verbose_name_plural = 'Agency Expertise'
