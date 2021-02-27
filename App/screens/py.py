import speech_recognition as sr

r = sr.Recognizer()
    with sr.AudioFile('audio.m4a') as source:  # use "test.wav" as the audio source
        audio = r.listen(source)  # extract audio data from the file
    try:
        print("Transcription: " + r.recognize_google(audio))  # recognize speech using Google Speech Recognition
    except LookupError:  # speech is unintelligible
        print("Could not understand audio")