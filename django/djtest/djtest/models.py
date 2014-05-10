form django.db import models

class List( models.Model ):
	title = models.CharField(maxlength=250, unique=True)
def __str__( self ):
	return self.title
class Meta:
	ordering = [&apos;title&apos;]
class Admin:
	pass

# class myModel( models.Model ):
# 	model_title = models.CharField( max_length=250, help_text='Maximum 250 characters.' )
# 	model_content = models.TextField( blank = True )