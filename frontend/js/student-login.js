document.getElementById('studentLoginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var email = document.getElementById('studentEmail').value;
    var password = document.getElementById('studentPassword').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Student logged in
            window.location.href = "frontend/student-dashboard.html"; // Redirect to student dashboard
        })
        .catch((error) => {
            var errorMessage = document.getElementById('error-message');
            switch (error.code) {
                case 'auth/user-not-found':
                    errorMessage.textContent = "User not found. Please sign up first.";
                    setTimeout(() => {
                        window.location.href = 'student-signup.html'; // Redirect to student signup page
                    }, 3000); // Redirect after 3 seconds
                    break;
                case 'auth/wrong-password':
                    errorMessage.textContent = "Incorrect password. Please try again.";
                    break;
                case 'auth/invalid-email':
                    errorMessage.textContent = "Invalid email address. Please check and try again.";
                    break;
                default:
                    errorMessage.textContent = "Login failed. Please check your credentials and try again.";
                    break;
            }
        });
});
