#!/usr/bin/python
# -*- coding: utf-8 -*-

from django.conf.urls import *

urlptterns = patterns ( ('sblog.views'),
	url(r'^bloglist/$', 'blog_list', name='bloglist'),
)