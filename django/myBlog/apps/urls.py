#!/usr/bin/python
# -*- coding: utf-8 -*-

from django.conf.urls import patterns, url

urlpatterns = patterns ( ('apps.views'),
	url(r'^$', 'blog_list', name='bloglist'),
)