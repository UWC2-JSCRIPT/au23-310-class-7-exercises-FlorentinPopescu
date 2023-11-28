function checkFields() {
    /**
     * introduces constraints on fist-name, last-name and email fields
     * adds event listeners on fist-name, last-name and email fields
     * */

    const constraints = {
        'first-name': [
            "^[A-Za-z]{3,20}$",
            "Florentin says that your first name must contain at least 3 letters",
        ],
        'last-name': [
            "^[A-Za-z]{3,20}$",
            "Florentin says that your last name must contain at least 3 letters",
        ],
        email: [
            "^\\w+@\\w+\\.\\w+$",
            "Florentin says that your email must contain @ and . characters",
        ],
    };

    // read first name id
    const firstName = document.getElementById("first-name");
    firstName.noValidate = true;

    // read last name id
    const lastName = document.getElementById("last-name");
    lastName.noValidate = true;

    // read email id
    const email = document.getElementById("email");
    email.noValidate = true;

    // constraint checker -----------------------
    const constraintFirstName = new RegExp(constraints['first-name'][0], "");
    const constraintLastName = new RegExp(constraints['last-name'][0], "");
    const constraintEmail = new RegExp(constraints['email'][0], "");

    // check first name
    if (constraintFirstName.test(firstName.value)) {
        firstName.setCustomValidity("");
    } else {
        firstName.setCustomValidity(constraints["first-name"][1]);
    }

    firstName.addEventListener("input", (e) => {
        if (firstName.validity.typeMismatch) {
            firstName.setCustomValidity("I am expecting your first name!");
        } else {
            firstName.setCustomValidity("");
            e.preventDefault();
        }
    });

    // check last name --------------------------
    if (constraintLastName.test(lastName.value)) {
        lastName.setCustomValidity("");
    } else {
        lastName.setCustomValidity(constraints["last-name"][1]);
    }

    lastName.addEventListener("input", (e) => {
        if (lastName.validity.typeMismatch) {
            lastName.setCustomValidity("I am expecting your family name!");
        } else {
            lastName.setCustomValidity("");
            e.preventDefault();
        }
    });

    // check email -------------------------------
    if (constraintEmail.test(email.value)) {
        email.setCustomValidity("");
    } else {
        email.setCustomValidity(constraints["email"][1]);
    }

    email.addEventListener("input", (e) => {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("I am expecting an email address!");
        } else {
            email.setCustomValidity("");
            e.preventDefault();
        }
    });

}

/* ----------------------------------------- */
window.onload = () => {

    document.getElementById("first-name").onchange = checkFields;
    document.getElementById("first-name").oninput = checkFields;

    document.getElementById("last-name").onchange = checkFields;
    document.getElementById("last-name").oninput = checkFields;

    document.getElementById("email").onchange = checkFields;
    document.getElementById("email").oninput = checkFields;

};
