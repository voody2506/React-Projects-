# Generated by Django 2.0.3 on 2018-04-20 08:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='description',
            field=models.CharField(default='none', max_length=200),
        ),
        migrations.AddField(
            model_name='post',
            name='image',
            field=models.CharField(default='none', max_length=200),
        ),
        migrations.AlterField(
            model_name='post',
            name='title',
            field=models.CharField(default='none', max_length=200),
        ),
    ]