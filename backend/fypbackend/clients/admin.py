from django.contrib import admin
from .models import ClientProfile

# Register your models here.


class ClientProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'firstname', 'lastname',
                    'email', 'address', 'company', 'user')


admin.site.register(ClientProfile, ClientProfileAdmin)
