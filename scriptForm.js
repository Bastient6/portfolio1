function submitForm(){
    emailjs.init("ihlJFguo8ST3tcBGN");
    const sendEmail = async (event) => {
    event.preventDefault();
    const form = event.target;
    try {
        const response = await emailjs.sendForm(
        "service_xqxqmig",
        "template_796szms",
        form,
        );
        console.log("Email sent successfully!", response);
    } catch (error) {
        console.error("Failed to send email:", error);
    }
    };

    document.addEventListener("DOMContentLoaded", () => {
    document
        .getElementById("contact-form")
        .addEventListener("submit", sendEmail);
    });
}

submitForm();