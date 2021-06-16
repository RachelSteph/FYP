from django.contrib import admin
from .models import AgencyProfile

# Register your models here.


class AgencyProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'address', 'date_created', 'user')


admin.site.register(AgencyProfile, AgencyProfileAdmin)
