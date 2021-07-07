from django.contrib import admin

from .models import Agent, Client, Appointment, Project, Review, Expertise


admin.site.register([Agent, Client, Appointment, Project, Review, Expertise])