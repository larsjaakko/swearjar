from django.shortcuts import render

from sweargen.models import Stem
from sweargen.serializers import StemSerializer

from rest_framework import generics


# Create your views here.


def index(request):
    # Construct a dictionary to pass to the template engine as its context.
    # Note the key boldmessage is the same as {{ boldmessage }} in the template
    context_dict = {'boldmessage': "I am bold font from the context"}

    # Return a rendered response to send to the client.
    # We make use of the shortcut function to make our lives easier.
    # Note that the first parameter is the template we wish to use.

    return render(request, 'sweargen/index.html', context_dict)


class StemList(generics.ListCreateAPIView):
    queryset = Stem.objects.all()
    serializer_class = StemSerializer


class StemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Stem.objects.all()
    serializer_class = StemSerializer
