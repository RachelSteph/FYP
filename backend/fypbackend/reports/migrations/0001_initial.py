# Generated by Django 3.2.3 on 2021-05-19 13:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('agencies', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Report',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numberofprojects', models.PositiveIntegerField()),
                ('date_issued', models.DateTimeField(auto_now_add=True)),
                ('agencyprofile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='agencies.agencyprofile')),
            ],
        ),
    ]
