#!/usr/bin/python
# -*- coding: utf-8 -*-

from django.conf.urls import patterns, url

urlpatterns = patterns ( ('sblog.views'),
	url(r'^bloglist/$', 'blog_list', name='bloglist'),
)