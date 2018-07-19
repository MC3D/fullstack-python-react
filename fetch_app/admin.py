from django.contrib import admin
from fetch_app.models import User, UserProfileInfo
# Register your models here.
admin.site.register([User, UserProfileInfo])
