from django.forms import widgets
from rest_framework import serializers
from sweargen.models import Category, Stem


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('id', 'name')


class StemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Stem
        fields = ('id', 'category', 'word', 'head', 'modifier')
