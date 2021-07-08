from api.models import Agent, Appointment, Client, Project, Review, UserType, Expertise
from api.serializers import AgentSerializer, AppointmentSerializer, ClientSerializer, ProjectSerializer, ReviewSerializer, UserSerializer, GroupSerializer, ExpertiseSerializer
from rest_framework import serializers, viewsets, generics, status, permissions
from rest_framework_simplejwt.views import TokenObtainPairView
from api.serializers import CustomTokenObtainPairSerializer
from django.contrib.auth.models import User, Group
from rest_framework.response import Response


class CustomTokenObtainPairView(TokenObtainPairView):
    # https://stackoverflow.com/questions/54544978/customizing-jwt-response-from-django-rest-framework-simplejwt
    serializer_class = CustomTokenObtainPairSerializer


class UserCreateView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    http_method_names = ['get', 'post', 'delete',
                         'put', 'patch', 'head', 'options', 'trace']


    def create(self, request, *args, **kwargs):
        user_type = request.data.get('user_type', None)

        if (user_type == UserType.AGENT):
            serializer = AgentSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        if (user_type == UserType.CLIENT):
            serializer = ClientSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def perform_create(self, serializer):
        serializer.save()


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]
    http_method_names = ['get', 'post', 'delete',
                         'put', 'patch', 'head', 'options', 'trace']



class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]
    http_method_names = ['get', 'post', 'delete',
                         'put', 'patch', 'head', 'options', 'trace']



class AgentViewSet(viewsets.ModelViewSet):
    queryset = Agent.objects.all()
    serializer_class = AgentSerializer
    permission_classes = [permissions.IsAuthenticated]
    http_method_names = ['get', 'post', 'delete',
                         'put', 'patch', 'head', 'options', 'trace']



class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    permission_classes = [permissions.IsAuthenticated]
    http_method_names = ['get', 'post', 'delete',
                         'put', 'patch', 'head', 'options', 'trace']



class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [permissions.IsAuthenticated]
    http_method_names = ['get', 'post', 'delete',
                         'put', 'patch', 'head', 'options', 'trace']


    def list(self, request, *args, **kwargs):
        # https://www.django-rest-framework.org/api-guide/filtering/#filtering-against-the-current-user
        queryset = self.filter_queryset(Appointment.objects.filter(client=request.user))

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def perform_create(self, serializer):
        client = Client.objects.get(pk=self.request.user.id)
        serializer.save(client=client)


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated]
    http_method_names = ['get', 'post', 'delete',
                         'put', 'patch', 'head', 'options', 'trace']


    '''def get_queryset(self):
        client = Client.objects.get(pk=self.request.user.id)
        if client:
            return Appointment.objects.filter(client=client)
        agent = Agent.objects.get(pk=self.request.user.id)
        if agent:
           return Appointment.objects.filter(agent=agent)
        return super().get_queryset()

    def perform_create(self, serializer):
        client = Client.objects.get(pk=self.request.user.id)
        serializer.save(client=client)'''

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [permissions.IsAuthenticated]
    http_method_names = ['get', 'post', 'delete',
                         'put', 'patch', 'head', 'options', 'trace']



class ExpertiseViewSet(viewsets.ModelViewSet):
    queryset = Expertise.objects.all()
    serializer_class = ExpertiseSerializer
    permission_classes = [permissions.IsAuthenticated]
    http_method_names = ['get', 'post', 'delete',
                         'put', 'patch', 'head', 'options', 'trace']
