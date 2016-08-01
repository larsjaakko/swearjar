from django.conf.urls import patterns, url
from sweargen import views
from rest_framework.urlpatterns import format_suffix_patterns
from django.contrib.sitemaps.views import sitemap


urlpatterns = patterns(
    '',
    url(r'^$', views.index, name='index'),
    url(r'^stems/$', views.StemList.as_view()),
    url(r'^stems/random/$', views.RandomStemList.as_view()),
    url(r'^sweargen/$', views.SwearGen.as_view()),
    url(r'^sweargen/(?P<category>.+)/$', views.SwearGen.as_view()),
    url(r'^stems/(?P<pk>[0-9]+)/$', views.StemDetail.as_view()),
    url(r'^sitemap\.xml$', sitemap, {'sitemaps': sitemaps},
    name='django.contrib.sitemaps.views.sitemap'),
)

urlpatterns = format_suffix_patterns(urlpatterns)
