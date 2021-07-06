from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

router = DefaultRouter()

router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'agents', views.AgentViewSet)
router.register(r'clients', views.ClientViewSet)
router.register(r'appointments', views.AppointmentViewSet)
router.register(r'projects', views.ProjectViewSet)


urlpatterns = [
    # path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/login/', views.CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/register/', views.UserCreateView.as_view(), name='user_register'),
    path('auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('', include(router.urls)),
]
