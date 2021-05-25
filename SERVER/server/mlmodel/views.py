from django.http import JsonResponse
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import requests


# Create your views here.
@csrf_exempt
def indexPage(request):
    # getting the audio files from the post request sent by the app
    f = request.FILES['file']
    with open('audio.m4a', 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)

    # getting the audio files from the post request sent by the app
    f1 = request.FILES['file2']
    with open('image.jpg', 'wb+') as destination:
        for chunk in f1.chunks():
            destination.write(chunk)

    return HttpResponse("<h1>Successful !</h1>")


@csrf_exempt
def get_prediction(request):
    url = 'http://7b856643a1b7.ngrok.io/'
    image = request.FILES['file2']
    audio = request.FILES['file']
    data = {'file': audio, 'file2': image}
    # get_file_binary(audio)

    # r = requests.post(url=url, files=data)
    # print(type(r.json()))
    # return JsonResponse({'ans': r.json()})
    return JsonResponse({'ans':{'answer':'that is cool'}})


def get_file_binary(f):
    pass