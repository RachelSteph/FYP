from django.contrib import admin
from .models import Project


# Register your models here.
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'agencyprofile', 'clientprofile', 'project_description',
                    'project_startdate', 'project_enddate', 'project_status')


admin.site.register(Project, ProjectAdmin)
