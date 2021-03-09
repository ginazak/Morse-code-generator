function morseCode(message) {
    /*Encodes a given alphanumeric string to its morse code form and returns a single-spaced string.
    * Special characters are not considered. 
    * Code output doesn't differentiate between either words or paragraphs.
    */

    const morseDict = {
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
    
    // Given string converted to usable array
    message = message.toUpperCase().split("");

    // Characters in array not found in given morsecode dictionary removed
    let enCode = message.filter(i => i in morseDict);

    // Remaining items in array mapped to dictionary and respective object values returned
    enCode = enCode.map(i => morseDict[i]);

    // Resulting string single-spaced between each encoded 'letter'
    return enCode.join(" ");
}