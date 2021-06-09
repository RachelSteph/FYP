from django.contrib.auth.models import AbstractUser
from django.db import models
#from django.urls import reverse

#from django.utils.translation import gettext_lazy as _


# Create your models here.

class CustomUser(AbstractUser):
    is_client = models.BooleanField(default=True)
    is_agency = models.BooleanField(default=False)

    def __str__(self):
        return self.username

    '''class Types(models.TextChoices):
        AGENCY = "AGENCY", "Agency"
        CLIENT = "CLIENT", "Client"

    type = models.CharField(_("Type"), max_length=50,
                            choices=Types.choices, default=Types.CLIENT)


    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})'''
