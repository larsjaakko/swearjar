from django.db import models

# Create your models here.


class Category(models.Model):

    name = models.CharField(max_length=128, unique=True)


class Stem(models.Model):

    category = models.ForeignKey(Category)
    word = models.CharField(max_length=128, unique=True)
    head = models.BooleanField(default=False)
    modifier = models.BooleanField(default=False)
