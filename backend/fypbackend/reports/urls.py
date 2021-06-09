from django.urls import path
from .views import ReportList, ReportDetail

urlpatterns = [
    path('<int:pk>/', ReportDetail.as_view()),
    path('', ReportList.as_view()),
]
