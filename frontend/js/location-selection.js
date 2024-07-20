document.addEventListener('DOMContentLoaded', () => {
    const countrySelect = document.getElementById('country');
    const locationSelect = document.getElementById('location');

    const locations = {
        india: ['Chennai', 'Delhi', 'Bhopal', 'Mumbai', 'Kolkata'],
        usa: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
        uk: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow'],
        australia: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide']
    };

    countrySelect.addEventListener('change', () => {
        const selectedCountry = countrySelect.value;
        const locationOptions = locations[selectedCountry] || [];

        // Clear previous options
        locationSelect.innerHTML = '<option value="">Select a location</option>';

        // Populate new options
        locationOptions.forEach(location => {
            const option = document.createElement('option');
            option.value = location.toLowerCase();
            option.textContent = location;
            locationSelect.appendChild(option);
        });
    });
});

document.getElementById('locationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var location = document.getElementById('location').value;
    var user = firebase.auth().currentUser;

    if (user) {
        firebase.database().ref('students/' + user.uid).update({
            location: location
        }).then(() => {
            window.location.href = 'college-list.html';
        });
    } 
});
