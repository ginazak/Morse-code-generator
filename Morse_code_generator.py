def morseCode(message):
    """ Encodes a given alphanumeric string to its morse code form.
    Special characters are not considered. 
    Code output doesn't differentiate between either words or paragraphs.
    Output is a single-spaced string.
    """

    morse_dict = {
        "A": ".-",
        "B": "-...",
        "C": "-.-.",
        "D": "-..",
        "E": ".",
        "F": "..-.",
        "G": "--.",
        "H": "....",
        "I": "..",
        "J": ".---",
        "K": "-.-",
        "L": ".-..",
        "M": "--",
        "N": "-.",
        "O": "---",
        "P": ".--.",
        "Q": "--.-",
        "R": ".-.",
        "S": "...",
        "T": "-",
        "U": "..-",
        "W": ".--",
        "X": "-..-",
        "Y": "-.--",
        "Z": "--..",
        "1": ".----", 
        "2": "..---", 
        "3": "...--", 
        "4": "....-", 
        "5": ".....", 
        "6": "-....", 
        "7": "--...", 
        "8": "---..", 
        "9": "----.", 
        "0": "-----",
    }

    # Given string converted to usable list
    message_list = list(message.upper())

    # Only characters in list found in morsecode dictionary mapped to corresponding dictionary values
    encoded_msg = [(morse_dict[n]) for n in message_list if n in morse_dict]

    # Resulting string single-spaced between each encoded 'letter'        
    return(" ".join(encoded_msg))