from django.http import HttpResponse
from django.shortcuts import render
from django.views import View

from cars.models import Car, CarType
from django.http import JsonResponse

# Create your views here.
class AllCarsView(View):

    def get(self, request):
        car_types = CarType.objects.all()
        cars = Car.objects.all()
        return render(request, 'cars.html', {'cars':cars, 'car_types':car_types})


class GetCarByTypeApi(View):

    def get(self, request):
        ids = request.GET.getlist('type_ids')
        cars = Car.objects.filter(type__in=ids)
        cars = [{'name':car.name, 'type':car.type.name} for car in cars]
        return JsonResponse(cars, safe=False)



