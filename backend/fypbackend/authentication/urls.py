from django.urls import path

from rest_framework_simplejwt.views import (
    TokenObtainPairView, TokenRefreshView,)
from .views import LogoutView
from .api import RegisterApi

urlpatterns = [

    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterApi.as_view()),
    path('logout/', LogoutView.as_view(), name='auth_logout'),

]
