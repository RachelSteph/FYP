from django.db import models
from django.conf import settings
#from users.models import CustomUser
# Create your models here.


class ClientProfile(models.Model):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    address = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,)

    class Meta:
        verbose_name_plural = 'Client Profiles'

    def __str__(self):
        return self.firstname


class ClientContacts(models.Model):
    clientprofile = models.ForeignKey(ClientProfile, on_delete=models.CASCADE)
    phonenumber = models.CharField(max_length=13)

    class Meta:
        verbose_name_plural = 'Client Contacts'

    def __str__(self):
        return self.clientprofile.firstname
