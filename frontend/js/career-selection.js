document.getElementById('careerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var career = document.getElementById('career').value;
    var user = firebase.auth().currentUser;

    if (user) {
        firebase.database().ref('students/' + user.uid).update({
            career: career
        }).then(() => {
            window.location.href = 'college-selection.html';
        });
    } 
});
