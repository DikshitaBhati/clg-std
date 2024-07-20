document.getElementById('adminLoginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var email = document.getElementById('adminEmail').value;
    var password = document.getElementById('adminPassword').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            firebase.database().ref('admins/' + user.uid).once('value')
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        // Admin logged in
                        window.location.href = 'backend/admin-dashboard.html';
                    } else {
                        // Not an admin
                        firebase.auth().signOut();
                        alert('You are not an admin.');
                    }
                });
        })
        .catch((error) => {
            console.error(error.message);
        });
});
