var contactLink = document.querySelector(".contact");
var contactButton = document.querySelector(".contact-button");
var closeButton = document.querySelector(".close-button");
var contactModal = document.querySelector(".contact-modal");
var contactModalContent = document.querySelector(".contact-modal-content");
var body = document.querySelector("body");

function toggleModal() {
    // Display or hide the contact modal.
    contactModal.classList.toggle("show-modal");

    // Apply animation to the contact form.
    contactModalContent.classList.toggle("show-contact-modal-content");

    // Toggle scrollability of the modal background.
    body.classList.toggle("fixed");
}

contactLink.addEventListener("click", toggleModal);
contactButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", function(e) {
    if (e.target === contactModal) {
        toggleModal();
    }
});
