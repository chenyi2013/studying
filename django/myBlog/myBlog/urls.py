from django.conf.urls import patterns, include, url

from apps import views

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns( (''),
    # Examples:
    # url(r'^$', 'myBlog.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),


    url(r'^', include('apps.urls')),
    url(r'^detail/(?P<id>\d+)/', views.blog_detail, name='detail'),
)


# if settings.DEBUG :
# 	urlpatterns += patterns( (''),
# 	    url(r'^static/(?P<path>.*)$', 'django.views.static.serve',
# 	            {'document_root': os.path.dirname( os.path.dirname(__file__) )+'/static'}
# 	    ),
# 	)

# urlpatterns += patterns((''),
#     (r'^uploads/(?P<path>.*)$', 'django.views.static.serve',
#             {'document_root': os.path.dirname( os.path.dirname(__file__) )+'/uploads'}
#     ),
# )

# urlpatterns += patterns((''),
#     (r'^uploads/(?P<path>.*)$', 'django.views.static.serve', os.path.dirname( os.path.dirname(__file__) )+'/uploads'),
# )