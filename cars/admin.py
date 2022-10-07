from django.contrib import admin

from cars.models import Car, CarType

# Register your models here.
admin.site.register(Car)
admin.site.register(CarType)