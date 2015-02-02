from django.shortcuts import render
import random

from sweargen.models import Stem
from sweargen.serializers import StemSerializer

from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response

# Create your views here.


def index(request):
    # Construct a dictionary to pass to the template engine as its context.
    # Note the key boldmessage is the same as {{ boldmessage }} in the template
    context_dict = {'boldmessage': "I am bold font from the context"}

    # Return a rendered response to send to the client.
    # We make use of the shortcut function to make our lives easier.
    # Note that the first parameter is the template we wish to use.

    return render(request, 'sweargen/index.html', context_dict)


class StemList(generics.ListAPIView):
    queryset = Stem.objects.all()
    serializer_class = StemSerializer


class StemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Stem.objects.all()
    serializer_class = StemSerializer


class RandomStemList(generics.ListAPIView):

    serializer_class = StemSerializer

    num_random_objects = 10

    def get_queryset(self):
        all_objects = Stem.objects.all()
        return random.sample(
            all_objects,
            min(self.num_random_objects, all_objects.count())
            )


class SwearGen(APIView):
    """
    A view that returns a combination of modifier and head,
    in the specified category.
    """

    serializer_class = StemSerializer

    def get(self, request, format=None):

        category = self.request.QUERY_PARAMS.get('category', None)

        heads = Stem.objects.filter(head=True, category=category)
        modifiers = Stem.objects.filter(modifier=True, category=category)

        diff = False

        while not diff:
            modifierInstance = random.sample(modifiers, 1)
            headInstance = random.sample(heads, 1)

            diff = modifierInstance != headInstance

        modifier = modifierInstance[0].word
        head = headInstance[0].word

        if head.startswith(modifier[-1:]):
            modifier = modifier + '-'

        swearword = modifier + head

        content = {'swearword': swearword.capitalize()}
        return Response(content)
