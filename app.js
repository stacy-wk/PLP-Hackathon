document.getElementById("download-cv").onclick = function () {
    window.open("STACY_KAMAU_CV.pdf", "_blank"); // Opens in a new tab
};



const form = document.getElementById("contact-form");
const sendBtn = document.getElementById("send-btn");

form.onsubmit = function (event) {
    event.preventDefault(); // Prevent page refresh

    sendBtn.innerHTML = 'Sent! <i class="fas fa-check"></i>'; // Change button text to "Sent!" with a checkmark
    form.reset(); // Clear input fields

    setTimeout(() => {
        sendBtn.innerHTML = 'Send <i class="fas fa-paper-plane"></i>'; // Reset button text with paper plane icon
    }, 2000);
};


