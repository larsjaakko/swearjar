from django.conf.urls import patterns, url
from sweargen import views
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = patterns(
    '',
    url(r'^$', views.index, name='index'),
    url(r'^stems/$', views.StemList.as_view()),
    url(r'^stems/random/$', views.RandomStemList.as_view()),
    url(r'^sweargen/$', views.SwearGen.as_view()),
    url(r'^sweargen/(?P<category>.+)/$', views.SwearGen.as_view()),
    url(r'^stems/(?P<pk>[0-9]+)/$', views.StemDetail.as_view()),
)

urlpatterns = format_suffix_patterns(urlpatterns)
