from rest_framework import serializers
from fetch_app.models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Profile
