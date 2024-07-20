
document.addEventListener('DOMContentLoaded', function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var userId = user.uid;
            var detailsContainer = document.getElementById('detailsContainer');
            var loadingMessage = document.getElementById('loadingMessage');

            // Fetch student details from Firebase
            firebase.database().ref('registration/' + userId).once('value')
                .then(snapshot => {
                    if (snapshot.exists()) {
                        var studentData = snapshot.val();

                        // Update UI with student data
                        document.getElementById('name').textContent = studentData.name;
                        document.getElementById('email').textContent = studentData.email || 'N/A';
                        document.getElementById('phone').textContent = studentData.phone || 'N/A';
                        document.getElementById('address').textContent = studentData.address || 'N/A';

                        // Hide loading message and show details
                        loadingMessage.style.display = 'none';
                        detailsContainer.style.display = 'block';
                    } else {
                        loadingMessage.textContent = 'No student details found.';
                    }
                })
                .catch(error => {
                    console.error('Error fetching student details:', error);
                    loadingMessage.textContent = 'Error fetching student details.';
                });
        } else {
            window.location.href = '../student-login.html'; // Redirect to login if not authenticated
        }
    });
});
