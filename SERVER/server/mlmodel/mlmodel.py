from mlmodel.SpeechRecognition import Recognize

def Process():
    question = Recognize(r'C:/Users/Omkar/Downloads/Of Monsters and Men - Love Love Love.mp3')
    print(question)