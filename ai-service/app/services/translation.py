from googletrans import Translator


translator = Translator()


def translate_to_english(text: str, source_lang: str) -> str:
    if source_lang.lower() in ("en", "eng", "english"):
        return text
    try:
        result = translator.translate(text, src=source_lang, dest="en")
        return result.text
    except Exception:
        return text
