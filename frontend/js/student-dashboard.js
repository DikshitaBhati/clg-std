// student-dashboard.js

document.addEventListener('DOMContentLoaded', function() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // Display the student's name
            document.getElementById('studentName').innerText = user.displayName;

            // Fetch recent activity from the database
            const recentActivityRef = firebase.database().ref('students/' + user.uid + '/recentActivity');
            recentActivityRef.on('value', (snapshot) => {
                const recentActivityList = document.getElementById('recentActivity');
                recentActivityList.innerHTML = '';
                const activities = snapshot.val();
                if (activities) {
                    for (let key in activities) {
                        const li = document.createElement('li');
                        li.innerText = activities[key];
                        recentActivityList.appendChild(li);
                    }
                } else {
                    recentActivityList.innerHTML = '<li>No recent activity</li>';
                }
            });
        } else {
            // If no user is signed in, redirect to login page
            window.location.href = 'student-login.html';
        }
    });

    // Logout functionality
    document.getElementById('logoutButton').addEventListener('click', function() {
        firebase.auth().signOut().then(() => {
            window.location.href = 'index.html';
        }).catch((error) => {
            console.error('Error logging out: ', error);
        });
    });
});
