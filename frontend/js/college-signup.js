document.getElementById('collegeSignupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var email = document.getElementById('collegeEmail').value;
    var password = document.getElementById('collegePassword').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // College signed up successfully
            var user = userCredential.user;
            alert("Signup successful! Please login.");
            window.location.href = 'college-login.html'; // Redirect to college login page
        })
        .catch((error) => {
            console.error(error.message);
        });
});


