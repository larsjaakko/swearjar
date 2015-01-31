from django.conf.urls import patterns, url
from sweargen import views


urlpatterns = patterns(
    '',
    url(r'^$', views.index, name='index'),
    url(r'^stems/$', views.stem_list),
    url(r'^stems/(?P<pk>[0-9]+)/$', views.stem_detail),
)
