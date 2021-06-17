from django.db import models

# Create your models here.
class React(models.Model):
    
    todo = models.CharField(max_length=5000, default=" " )