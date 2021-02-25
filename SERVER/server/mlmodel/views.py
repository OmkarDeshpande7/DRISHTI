from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from playsound import playsound
from IPython.display import display, Image


from mlmodel.mlmodel import Process

# Create your views here.
@csrf_exempt
def indexPage(request):
    # Process()
    f = request.FILES['file']
    with open('audio.mp3', 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)

    f = request.FILES['file2']
    with open('image.jpg', 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)
    display(Image(filename='image.jpg'))

    return HttpResponse("<h1>hi</h1>")