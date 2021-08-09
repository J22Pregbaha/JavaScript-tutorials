function reverseString(s) {
    if(typeof(s) != "string") {
        console.log("Not a string");
        return;
    }

    var stringArray = [];
    for(var i=0; i < s.length; i++) {
        stringArray.push(s.charAt(i));
    }

    const reversedArray = stringArray.reverse();
    const reversedString = reversedArray.join();
    const reversedStringWithoutCommas = reversedString.replace(/,/g, '');
    console.log(reversedStringWithoutCommas);
}