from django.db import models

class Post(models.Model):
    model = models.CharField(max_length=20,default='iphone')
    title = models.CharField(max_length=200,default='none')
    description = models.CharField(max_length=200,default='none')
    image = models.CharField(max_length=200,default='none')
    def publish(self):
        self.save()
    
    def __str__(self):
        return self.title

class Cart(models.Model):
    title = models.CharField(max_length=20,default='none')
    def publish(self):
        self.save()
    
    def __str__(self):
        return self.title
# Create your models here.
