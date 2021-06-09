from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

# Register your models here.


class CustomerUserAdmin(UserAdmin):
    list_display = ('username', 'email')

    class Meta:
        model = CustomUser


admin.site.register(CustomUser, CustomerUserAdmin)

#admin: rachel
