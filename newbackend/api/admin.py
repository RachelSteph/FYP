from django.contrib import admin

from .models import Agent, Client, Appointment, Project


admin.site.register([Agent, Client, Appointment, Project])