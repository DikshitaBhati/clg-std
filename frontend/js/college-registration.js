document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var urlParams = new URLSearchParams(window.location.search);
    var collegeId = urlParams.get('id');
    var user = firebase.auth().currentUser;

    if (user) {
        firebase.database().ref('registrations/' + user.uid).push({
            name: name,
            email: email,
            phone: phone,
            address: address,
            collegeId: collegeId
        }).then(() => {
            window.location.href = 'student-details.html';
        });
    } 
});
