from django.urls import path
from django.urls.conf import include

from .views import AgencyProfileList, AgencyProfileDetail
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'agencies', AgencyProfileList)

urlpatterns = [
    path('<int:pk>/', AgencyProfileDetail.as_view()),
    path('', include(router.urls)),

]
