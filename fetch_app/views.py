from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework import generics

from fetch_app.models import UserProfileInfo
from fetch_app.serializers import UserProfileInfoSerializer

from django.conf import settings

# Create your views here.

class IndexView(TemplateView):
    template_name = 'index.html'

class UserProfileInfoListCreateAPIView(generics.ListCreateAPIView):
    queryset = UserProfileInfo.objects.all()
    serializer_class = UserProfileInfoSerializer


# settings.API_KEY
