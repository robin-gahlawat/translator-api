
import sys
from googletrans import Translator

def myTranslation():
    translator = Translator()
    msg = sys.argv[1]
    lang = sys.argv[2]

    translatedMessage = translator.translate(msg, dest=lang).text
    print(translatedMessage)


if __name__ == '__main__':
    myTranslation()




