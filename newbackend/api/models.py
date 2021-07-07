from django.db import models
from django.contrib.auth.models import User
from django.db.models.fields import TextField
from django.utils import timezone
from django.utils.translation import gettext_lazy as _


class UserType(models.TextChoices):
    AGENT = 'AGENT', _('AGENT')
    CLIENT = 'CLIENT', _('CLIENT')


class Agent(User):
    # https://docs.djangoproject.com/en/3.2/ref/contrib/auth/
    class Meta:
        verbose_name = 'agent'

    description = models.TextField()
    experienceyrs = models.PositiveSmallIntegerField()
    address = models.CharField(max_length=100)
    phone_number = models.CharField(unique=True, max_length=25)
    user_type = models.CharField(max_length=10, default=UserType.AGENT)
    

    def __str__(self):
        return f'{self.get_full_name()}'


class Client(User):
    # https://docs.djangoproject.com/en/3.2/ref/models/options/#verbose-name
    class Meta:
        verbose_name = 'client'

    phone_number = models.CharField(unique=True, max_length=25)
    address = models.CharField(max_length=100)
    user_type = models.CharField(max_length=10, default=UserType.CLIENT)

    def __str__(self):
        return f'{self.get_full_name()}'


class Appointment(models.Model):
    # https://docs.djangoproject.com/en/3.0/ref/models/fields/#enumeration-types
    class Status(models.TextChoices):
        BOOKED = 'BOOKED', _('BOOKED')
        CANCELLED = 'CANCELLED', _('CANCELLED')
        COMPLETED = 'COMPLETED', _('COMPLETED')

    description = models.TextField(max_length=500)
    start_date = models.DateField()
    end_date = models.DateField()
    status = models.CharField(max_length=10, choices=Status.choices, default=Status.BOOKED)

    agent = models.ForeignKey(Agent, on_delete=models.CASCADE)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.client.get_full_name()} {self.start_date} Appointment'


class Project(models.Model):
    class Status(models.TextChoices):
        COMPLETE = 'COMPLETE', _('COMPLETE')
        INCOMPLETE = 'INCOMPLETE', _('INCOMPLETE')

    name = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    status = models.CharField(max_length=10, choices=Status.choices, default=Status.INCOMPLETE)
    agent = models.ForeignKey(Agent, on_delete=models.CASCADE)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name}'

    
#class Review(models.Model):
    #agent = models.ForeignKey(
        #Agent, related_name='comments', on_delete=models.CASCADE)
    #author = models.ForeignKey(User, on_delete=models.CASCADE)
    #content = TextField()
    #date_posted = models.DateTimeField(default=timezone.now)

    #def __str__(self):
        #return str(self.author) + ', ' + self.blogpost_connected.title[:40]    


class Review(models.Model): 
    agent = models.ForeignKey(Agent,
                             on_delete=models.CASCADE,
                             related_name='comments')
    author = models.ForeignKey(User, on_delete=models.CASCADE)    
    #email = models.EmailField() 
    comment = models.TextField() 
    created = models.DateTimeField(auto_now_add=True) 
    updated = models.DateTimeField(auto_now=True) 
    active = models.BooleanField(default=True) 

    class Meta: 
        ordering = ('created',) 

    def __str__(self): 
        return 'Comment by {} on {}'.format(self.author, self.agent) 


class Expertise(models.Model):
    name = models.CharField(max_length= 150)
    description =models.TextField()

    def __str__(self):
        return f'{self.name}'