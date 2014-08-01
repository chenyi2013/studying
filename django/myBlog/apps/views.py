from django.shortcuts import render

# Create your views here.

from django.http import Http404
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.template import *

from django.shortcuts import render_to_response
from apps.models import Blog
from apps.models import Tag


def blog_list ( request ) :
	blogs = Blog.objects.all()
	return render_to_response('blog_list.html', {'blogs': blogs})


def blog_detail ( request, id='' ) :
	try:
		blog = Blog.objects.get(id=id)
		tags = Tag.objects.all()
	except Blog.DoesNotExist :
		raise Http404
	return render_to_response('blog_detail.html',
		{'blog': blog, 'tags': tags},
		context_instance = RequestContext( request ))
	#blogdetail = Blog.objects.all()
	#return render_to_response('blog_detail.html', {'blogdetail': blogdetail})