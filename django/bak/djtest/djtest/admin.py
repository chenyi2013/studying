#!/usr/bin/env python
# coding: utf-8

form django.contrib import admin
form mytest.models import myModel

class myModelAdmin( admin.modelAdmin ):
	pass

admin.site.register( myModel, myModelAdmin )