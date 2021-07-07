from rest_framework import serializers
from api.models import Agent, Appointment, Client, Project, Review, Expertise
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.models import User, Group
from rest_framework.relations import SlugRelatedField

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        
        if Client.objects.filter(pk=self.user.id).exists():
            client = Client.objects.get(pk=self.user.id)
            serialized_user = ClientSerializer(client)
            data['user'] = serialized_user.data
            return data

        if Agent.objects.filter(pk=self.user.id).exists():
            agent = Agent.objects.get(pk=self.user.id)
            serialized_user = AgentSerializer(agent)
            data['user'] = serialized_user.data
            return data

        '''client = Client.objects.get(pk=self.user.id)
        if client:
            serialized_user = ClientSerializer(client)
            data['user'] = serialized_user.data
            return data

        agent = Agent.objects.get(pk=self.user.id)
        if agent:
            serialized_user = AgentSerializer(agent)
            data['user'] = serialized_user.data
            return data

        serialized_user = UserSerializer(self.user)
        data['user'] = serialized_user.data
        return data'''

class UserRegistrationSerializer():
    pass


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email', 'username', 'password']


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['id', 'name']

# https://stackoverflow.com/questions/29746584/django-rest-framework-create-user-with-password


class AgentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agent
        fields = ['id', 'first_name', 'last_name', 'email', 'username', 'phone_number', 'password', 'user_type', 'experienceyrs', 'description', 'address']

    def create(self, validated_data):
        agent = Agent.objects.create_user(**validated_data)
        return agent


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ['id', 'first_name', 'last_name', 'email', 'username', 'phone_number', 'password', 'user_type', 'address']

    def create(self, validated_data):
        client = Client.objects.create_user(**validated_data)
        return client


class AppointmentSerializer(serializers.ModelSerializer):
    #client = serializers.ReadOnlyField(source='client.id')
    client = SlugRelatedField(slug_field="username",
                              queryset=Client.objects.all())
    agent = SlugRelatedField(slug_field="username",
                              queryset=Agent.objects.all())
    class Meta:
        model = Appointment
        fields = ['id', 'description', 'start_date', 'end_date', 'status', 'agent', 'client']


class ProjectSerializer(serializers.ModelSerializer):
    agent = SlugRelatedField(slug_field="username",
                              queryset=Agent.objects.all())

    class Meta:
        model = Project
        fields = ['id', 'name', 'description','status', 'agent', 'client']

class ReviewSerializer(serializers.ModelSerializer):
    author = SlugRelatedField(slug_field="username",
                              queryset=Client.objects.all())
    class Meta:
        model = Review
        fields = '__all__'


class ExpertiseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'