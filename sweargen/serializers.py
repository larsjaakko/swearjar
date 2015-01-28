from django.forms import widgets
from rest_framework import serializers
from sweargen.models import Category, Page


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('name')


class StemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Stem
        fields = ('category', 'word', 'head', 'modifier')
