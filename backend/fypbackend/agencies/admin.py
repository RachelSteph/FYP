from django.contrib import admin
from .models import AgencyProfile, AgencyContacts, AgencyExpertise

# Register your models here.


class AgencyProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'address', 'date_created', 'user')


class AgencyContactsAdmin(admin.ModelAdmin):
    list_display = ('id', 'agencyprofile', 'phonenumber')


class AgencyExpertiseAdmin(admin.ModelAdmin):
    list_display = ('id', 'agencyprofile', 'expertise_categories')


admin.site.register(AgencyProfile, AgencyProfileAdmin)

admin.site.register(AgencyContacts, AgencyContactsAdmin)

admin.site.register(AgencyExpertise, AgencyExpertiseAdmin)
