let string = "Let it Snow";

function pigIt(str){
    const newString = str.split(" ")
    console.log(newString)
    newString.forEach((element, index) => {
        let firstLetter = element[0];
        console.log(firstLetter);
        element += firstLetter
        element += "ay"
        console.log(element);
        let pigLatinWord = element.replace(firstLetter, "")
        newString[index] = element.replace(element,pigLatinWord)
    })
}

pigIt(string);