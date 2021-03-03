import soundfile
from django.core.files.base import ContentFile
from django.core.files.storage import default_storage
import io
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from IPython.display import display, Image
import speech_recognition as sr
import soundfile as sf
from mlmodel.mlmodel import Process


# Create your views here.
@csrf_exempt    
def indexPage(request):
    # getting the audio files from the post request sent by the app
    f = request.FILES['file']
    with open('audio.mp3', 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)

    # getting the audio files from the post request sent by the app
    f1 = request.FILES['file2']
    with open('image.jpg', 'wb+') as destination:
        for chunk in f1.chunks():
            destination.write(chunk)

    
    return HttpResponse("<h1>Successful !</h1>")

def get_file_binary(request, f):
    # display(Image(filename='image.jpg'))

    file_obj = io.BytesIO()  # create file-object
    file_obj.write(f.read())  # write in file-object
    file_obj.seek(0)  # move to beginning so it will read from beginning
    # print(file_obj)
    r = sr.Recognizer()
    mic = sr.AudioFile(file_obj)  # use file-object
    with mic as source:
        audio = r.record(source) # extract audio data from the file
    try:
        print("Transcription: " + r.recognize_google(audio))  # recognize speech using Google Speech Recognition
    except LookupError:  # speech is unintelligible
        print("Could not understand audio")
    pass