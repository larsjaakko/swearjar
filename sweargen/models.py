from django.db import models

# Create your models here.


class Category(models.Model):

    name = models.CharField(max_length=128, unique=True)

    class Meta:
        verbose_name_plural = "categories"

    def __unicode__(self):
        return self.name


class Stem(models.Model):

    category = models.ForeignKey(Category)
    word = models.CharField(max_length=128)
    head = models.BooleanField(default=False)
    modifier = models.BooleanField(default=False)

    def __unicode__(self):
        return self.word
