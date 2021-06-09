from django.contrib import admin
from .models import Appointment


# Register your models here.
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('id', 'agencyprofile', 'clientprofile',
                    'description', 'appointment_time', 'date_issued')


admin.site.register(Appointment, AppointmentAdmin)
