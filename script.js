const OUTPUT = document.getElementById("outputField")

function getFormInput(){
            const FIGURE_NAME = document.getElementById("figureName")
        if (FIGURE_NAME.checkValidity()=== true) {
        var figureName = FIGURE_NAME.value;
        OUTPUT.innerHTML = "<p>You added "+ figureName+ " to your cart.</p>"
    } else if (FIGURE_NAME.checkValidity()=== false) {
        OUTPUT.innerHTML = "<p>Please enter a valid name.</p>"
    }
}

/*
function getFormInput2(){
    const NAME_FIELD = document.getElementById("nameField");
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML = "<h1>Your name is "+ userName + "</h1>"
}
*/
