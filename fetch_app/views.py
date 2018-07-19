from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework import generics

from fetch_app.models import Profile
from fetch_app.serializers import ProfileSerializer

# Create your views here.

class IndexView(TemplateView):
    template_name = 'index.html'

class ProfileListCreateAPIView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
