function convert(){
    var wordConvert = document.getElementById('input-converter').value;
    var word = "";

    var otan = {
        a: "Alfa",
        b: "Bravo",
        c: "Charlie",
        d: "Delta",
        e: "Echo",
        f: "Foxtrot",
        g: "Golf",
        h: "Hotel",
        i: "India",
        j: "Juliett",
        k: "Kilo",
        l: "Lima",
        m: "Mike",
        n: "November",
        o: "Oscar",
        p: "Papa",
        q: "Quebec",
        r: "Romeo",
        s: "Sierra",
        t: "Tango",
        u: "Uniform",
        v: "Victor",
        w: "Whiskey",
        x: "X-ray",
        y: "Yankee",
        z: "Zulu"
    }

    for (var i = 0; i < wordConvert.length; i++){
        var letter = wordConvert[i];
        if (otan.hasOwnProperty(letter)){
            word += otan[letter] + " ";
        }
        else if (letter !== " ") {
            word += letter.toUpperCase() + " ";
        }
    }
    var convertedWord = document.getElementById('converted-word').innerHTML = word;
}