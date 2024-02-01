const name = document.getElementById("name");
name.noValidate = true;

const email = document.getElementById("email");
email.noValidate = true;

const jobOpportunity = document.getElementById("job-opportunity");
const codingLanguage= document.getElementById("coding-language");
const companyWebsite = document.getElementById("company-website");

const form= document.getElementById("connect-form");
const select= document.getElementById("contact-kind");

const warnings = document.getElementById("warning");

/* --------------------------------------- */
let valid = false;

/* --------------------------------------- */
const validLength = (input, min) => {
    if (input.value.trim().length > min) {
        input.parentElement.classList.remove('invalid');
        return true;
    } else {
        input.parentElement.classList.add('invalid');
        warnings.innerHTML = "incorrect length";
        return false;
    }
}

/* --------------------------------------- */
const validURL = (input) => {
    try {
        const pattern = new RegExp(
            '^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', // fragment locator
            'i'
        );
        return pattern.test(input.value);
    } catch (err) {
        warnings.innerHTML = "incorrect URL";
        return false;
    }
}

/* --------------------------------------- */
const validateEmail = (emailField) => {
    let re = /\w+@\w+\.\w+/;

    if (re.test(emailField.value.trim())) {
        emailField.parentElement.classList.remove("invalid");
        return true;
    } else {
        emailField.parentElement.classList.add("invalid");
        warnings.innerHTML = 'incorrect email';
        return false;
    }
}

/* --------------------------------------- */
const validLanguage = (input) => {
    const languages = ["Javascript", "CSS", "PHP", "Python", "C++", "C#", "Matlab"];
    if (languages.includes(input.value)) {
        return true;
    } else {
        return false;
    }
}

/* --------------------------------------- */
const handleSelect = (selectElement) => {
    let selectedValue = selectElement.value;

    if (selectedValue === "job") {
        jobOpportunity.parentElement.classList.remove("hidden");
        companyWebsite.parentElement.classList.remove("hidden");

        codingLanguage.parentElement.classList.add("hidden");

    } else if (selectedValue === "talk") {
        codingLanguage.parentElement.classList.remove("hidden");

        jobOpportunity.parentElement.classList.add("hidden");
        companyWebsite.parentElement.classList.add("hidden");
    }
}

/* --------------------------------------- */
const multipleLanguages = () => {
    document.getElementById("coding-language").multiple = true;
    return true;
}

/* --------------------------------------- */
select.addEventListener("change", () => handleSelect(select));

/* --------------------------------------- */
form.addEventListener("submit", (e) => {
    handleSelect(select);

    if (validLength(name, 3) &&
        validateEmail(email) &&
        validLength(jobOpportunity, 3) &&
        validURL(companyWebsite)||
        validLanguage(codingLanguage)) {
        valid = true;
    } else {
        e.preventDefault();
        valid = false;
    }
})
