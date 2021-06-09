from django.urls import path
from . import views

from .views import ClientProfileList, ClientProfileDetail

urlpatterns = [
    path('<int:pk>/', ClientProfileDetail.as_view()),
    path('', ClientProfileList.as_view()),
    path('/user_details/', views.user_details, name='user')
]
