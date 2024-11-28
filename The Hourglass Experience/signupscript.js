document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    var fullName = document.getElementById('firstName').value;
    var dob = document.getElementById('dob').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Validation
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // If all validation passes, submit the form
    alert("Form submitted successfully! Please login to continue");
    document.getElementById('signupForm').submit(); 
    window.location.href = "loginpage.html";
});
