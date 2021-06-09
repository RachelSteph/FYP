from django.contrib import admin
from .models import Report

# Register your models here.


class ReportAdmin(admin.ModelAdmin):
    list_display = ('id', 'agencyprofile', 'numberofprojects', 'date_issued')


admin.site.register(Report, ReportAdmin)
