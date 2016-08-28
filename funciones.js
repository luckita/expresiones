function myFunction() {
    "use strict";
    document.getElementById("demo").innerHTML = "Paragraph changed with function.";
}

function changeText(textoNuevo) {
    "use strict";
    document.getElementById("changingtext").innerHTML = textoNuevo;
}


function dameDatos() {
    "use strict";
    var person = {
        firstName : "John",
        lastName : "Doe",
        age : 50,
        eyeColor : "blue"
    };
    document.getElementById("persona").innerHTML =
        person.firstName + " is " + person.age + " years old. His eyes are " + person.eyeColor + ".";
}

function working() {
    "use strict";
    window.alert("Stop slacking, we're working!");
}