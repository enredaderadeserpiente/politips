# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-08-05 19:50
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('politips_api', '0003_auto_20160805_1924'),
    ]

    operations = [
        migrations.CreateModel(
            name='Agenda',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='AgendaItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField(max_length=255)),
                ('agenda', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='politips_api.Agenda')),
            ],
        ),
        migrations.CreateModel(
            name='Vote',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('agenda_item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='politips_api.AgendaItem')),
                ('legislatorship', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='politips_api.Legislatorship')),
            ],
        ),
        migrations.AlterField(
            model_name='district',
            name='state',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='districts', to='politips_api.State'),
        ),
    ]
