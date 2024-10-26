// global variables
const contactForm = document.querySelector(".contact-form");
const allInputEl = contactForm.querySelectorAll("INPUT");
const textarea = contactForm.querySelector("TEXTAREA");

// handle contact us form submittion
contactForm.onsubmit = (event) => {
    event.preventDefault();

    if (allInputEl[0].value !== "" && allInputEl[1].value !== "" &&
        textarea.value !== ""
    ) {
        console.log({
            name: allInputEl[0].value,
            email: allInputEl[1].value,
            message: textarea.value
        });

        Swal.fire({
            title: "SUCCESS",
            text: "Your message has been sent, We will get back to you soon!, please check console for information.",
            icon: "success"
        });
    } else {
        Swal.fire({
            title: "FAILED",
            text: "All fields are required, Please try again!",
            icon: "warning"
        });
    }
}