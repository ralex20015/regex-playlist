//let regPass = new RegExp(/[a-z]/,'i');// Form Two

const inputs = document.querySelectorAll('input');
const patterns = {
    username: /^[a-z\d]{5,12}$/i,
    email: /^[a-z]([\.a-z_\d-]{5,})@[a-z\d]{3,}\.[a-z\d]{2,}\.?([a-z\d]{2,})?$/,
    password: /^[+\w@-]{8,20}$/,
    telephone: /^\d{10}$/,
    slug: /^[a-z\d-]{8,20}$/
};

//validation function

function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = "valid";
    }else{
        field.className = "invalid";
    }
}

inputs.forEach((input)=>{
    input.addEventListener("keyup",(e)=>{
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
})

