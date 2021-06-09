"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', admin.site.urls),
    path('api/', include('authentication.urls')),
    path('api/agencies/', include('agencies.urls')),
    path('api/clients/', include('clients.urls')),
    path('api/appointments/', include('appointments.urls')),
    path('api/projects/', include('projects.urls')),
    path('api/reports/', include('reports.urls')),
    path('api/reviews/', include('reviews.urls')),
    path('api-token-auth/', views.obtain_auth_token),


    # has to be at the end so that anything not matching Django URLs will be handled by the frontend
    #path('', include('frontend.urls')),
]
