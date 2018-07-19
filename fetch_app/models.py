from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser, User

# Create your models here.
class User(AbstractUser):
    pass

class UserProfileInfo(models.Model):
    # user = models.ForeignKey(settings.AUTH_USER_MODEL, default=1, on_delete=models.CASCADE)
    user = models.OneToOneField(User, on_delete=models.CASCADE,)
    # first_name = models.CharField(max_length=30)
    # last_name = models.CharField(max_length=30)
    time_created = models.DateTimeField(auto_now_add=True)
    picture = models.ImageField(upload_to='media', blank=True)

    def __str__(self):
        return self.user.username
