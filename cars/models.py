from django.db import models

# Create your models here.
class CarType(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class Car(models.Model):
    name = models.CharField(max_length=30)
    type = models.ForeignKey(CarType, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name} -- {self.type}"