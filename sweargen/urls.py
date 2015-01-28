from django.conf.urls import patterns, url
from sweargen import views


urlpatterns = patterns(
    '',
    url(r'^$', views.index, name='index')
)
