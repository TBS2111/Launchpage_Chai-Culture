document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const emailInput = this.querySelector('input[type="email"]');
    const button = this.querySelector('button');

    if (emailInput.value) {
        button.innerHTML = "Invitation Sent";
        button.style.backgroundColor = "#FDF5E6";
        button.style.color = "#2C1810";

        emailInput.value = "";
        emailInput.disabled = true;

        alert("Your interest has been noted. We shall reach out when the kettle is ready.");
    }
});