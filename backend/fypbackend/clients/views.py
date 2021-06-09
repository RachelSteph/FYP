from rest_framework import generics
# from django.shortcuts import render
from .models import ClientProfile
from .serializers import ClientProfileSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated

# from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.response import Response


class ClientProfileList(generics.ListCreateAPIView):
    queryset = ClientProfile.objects.all()
    serializer_class = ClientProfileSerializer


class ClientProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ClientProfile.objects.all()
    serializer_class = ClientProfileSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def user_details(request):
    token = request.META.get('HTTP_AUTHORIZATION')

    def get_user_from_token(token):
        try:
            user = Token.objects.get(pk=token[6:]).user
            print(user)
            return Response("jijed")
            # return Response({
            #     "user": user
            # })

        except ObjectDoesNotExist as error:
            print(error)
            return Response("nothing to show")

        #   serializer=SnippetSerializer(snippets, many=True)
    get_user_from_token(token)
