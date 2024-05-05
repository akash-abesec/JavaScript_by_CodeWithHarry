function submitForm() {
    // Get form data
    var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        cardNumber: document.getElementById("cardNumber").value,
        expiryDate: document.getElementById("expiryDate").value,
        cvv: document.getElementById("cvv").value
    };

    // Submit data (you can replace this with your spreadsheet API)
    console.log("Form Data:", formData);
    // You can use AJAX or fetch to send data to a server or Google Sheets API for further processing.

    // For demonstration purposes, let's just alert a success message
    alert("Payment submitted successfully!");
}
