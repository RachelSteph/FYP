from django.contrib import admin
from .models import Review

# Register your models here.


class ReviewAdmin(admin.ModelAdmin):
    list_display = ('id', 'agencyprofile', 'clientprofile', 'comment', 'stars')


admin.site.register(Review, ReviewAdmin)
