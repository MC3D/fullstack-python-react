from rest_framework import serializers
from fetch_app.models import UserProfileInfo

class UserProfileInfoSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = UserProfileInfo
