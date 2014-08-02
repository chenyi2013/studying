# -*- coding: utf-8 -*-
from south.utils import datetime_utils as datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Deleting model 'Blog'
        db.delete_table(u'apps_blog')

        # Removing M2M table for field tags on 'Blog'
        db.delete_table(db.shorten_name(u'apps_blog_tags'))

        # Adding model 'Blong'
        db.create_table(u'apps_blong', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('caption', self.gf('django.db.models.fields.CharField')(max_length=50)),
            ('author', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['apps.Author'])),
            ('content', self.gf('django.db.models.fields.TextField')()),
            ('publish_time', self.gf('django.db.models.fields.DateTimeField')(auto_now_add=True, blank=True)),
            ('update_time', self.gf('django.db.models.fields.DateTimeField')(auto_now=True, blank=True)),
            ('banner', self.gf('django.db.models.fields.files.ImageField')(max_length=100, blank=True)),
        ))
        db.send_create_signal(u'apps', ['Blong'])

        # Adding M2M table for field tags on 'Blong'
        m2m_table_name = db.shorten_name(u'apps_blong_tags')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('blong', models.ForeignKey(orm[u'apps.blong'], null=False)),
            ('tag', models.ForeignKey(orm[u'apps.tag'], null=False))
        ))
        db.create_unique(m2m_table_name, ['blong_id', 'tag_id'])


    def backwards(self, orm):
        # Adding model 'Blog'
        db.create_table(u'apps_blog', (
            ('content', self.gf('django.db.models.fields.TextField')()),
            ('caption', self.gf('django.db.models.fields.CharField')(max_length=50)),
            ('update_time', self.gf('django.db.models.fields.DateTimeField')(auto_now=True, blank=True)),
            ('author', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['apps.Author'])),
            ('banner', self.gf('django.db.models.fields.files.ImageField')(max_length=100, blank=True)),
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('publish_time', self.gf('django.db.models.fields.DateTimeField')(auto_now_add=True, blank=True)),
        ))
        db.send_create_signal(u'apps', ['Blog'])

        # Adding M2M table for field tags on 'Blog'
        m2m_table_name = db.shorten_name(u'apps_blog_tags')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('blog', models.ForeignKey(orm[u'apps.blog'], null=False)),
            ('tag', models.ForeignKey(orm[u'apps.tag'], null=False))
        ))
        db.create_unique(m2m_table_name, ['blog_id', 'tag_id'])

        # Deleting model 'Blong'
        db.delete_table(u'apps_blong')

        # Removing M2M table for field tags on 'Blong'
        db.delete_table(db.shorten_name(u'apps_blong_tags'))


    models = {
        u'apps.author': {
            'Meta': {'object_name': 'Author'},
            'email': ('django.db.models.fields.EmailField', [], {'max_length': '75', 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '30'}),
            'website': ('django.db.models.fields.URLField', [], {'max_length': '200', 'blank': 'True'})
        },
        u'apps.blong': {
            'Meta': {'object_name': 'Blong'},
            'author': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['apps.Author']"}),
            'banner': ('django.db.models.fields.files.ImageField', [], {'max_length': '100', 'blank': 'True'}),
            'caption': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            'content': ('django.db.models.fields.TextField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'publish_time': ('django.db.models.fields.DateTimeField', [], {'auto_now_add': 'True', 'blank': 'True'}),
            'tags': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['apps.Tag']", 'symmetrical': 'False', 'blank': 'True'}),
            'update_time': ('django.db.models.fields.DateTimeField', [], {'auto_now': 'True', 'blank': 'True'})
        },
        u'apps.tag': {
            'Meta': {'object_name': 'Tag'},
            'create_time': ('django.db.models.fields.DateTimeField', [], {'auto_now_add': 'True', 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'tag_name': ('django.db.models.fields.CharField', [], {'max_length': '20', 'blank': 'True'})
        }
    }

    complete_apps = ['apps']