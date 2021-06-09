from django.contrib import admin
from .models import ClientProfile, ClientContacts

# Register your models here.


class ClientProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'firstname', 'lastname',
                    'email', 'address', 'company', 'user')


class ClientContactsAdmin(admin.ModelAdmin):
    list = ('id', 'phonenumber')


admin.site.register(ClientProfile, ClientProfileAdmin)

admin.site.register(ClientContacts, ClientContactsAdmin)
