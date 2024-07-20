document.addEventListener('DOMContentLoaded', function() {
    var collegeDetails = document.getElementById('collegeDetails');
    var urlParams = new URLSearchParams(window.location.search);
    var collegeId = urlParams.get('id');

    // Sample data
    var collegeData = {
        '1': { name: 'IIT Delhi', tuition: '₹200,000/year', housing: '₹50,000/year', placements: '98%' },
        '2': { name: 'IIT Bombay', tuition: '₹220,000/year', housing: '₹60,000/year', placements: '97%' },
        '3': { name: 'IIT Madras', tuition: '₹210,000/year', housing: '₹55,000/year', placements: '96%' },
        '4': { name: 'BITS Pilani', tuition: '₹250,000/year', housing: '₹70,000/year', placements: '95%' },
        '5': { name: 'NIT Trichy', tuition: '₹180,000/year', housing: '₹40,000/year', placements: '94%' }
    };

    var college = collegeData[collegeId];
    if (college) {
        collegeDetails.innerHTML = `
            <p>Name: ${college.name}</p>
            <p>Tuition: ${college.tuition}</p>
            <p>Housing: ${college.housing}</p>
            <p>Placements: ${college.placements}</p>
        `;
    } else {
        collegeDetails.textContent = 'College not found.';
    }
});

function register() {
    var urlParams = new URLSearchParams(window.location.search);
    var collegeId = urlParams.get('id');
    window.location.href = 'college-registration.html?id=' + collegeId;
}
