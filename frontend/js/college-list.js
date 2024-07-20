document.addEventListener('DOMContentLoaded', function() {
    var collegeList = document.getElementById('collegeList');

    // Sample data
    var colleges = [
        { name: 'IIT Delhi', id: '1' },
        { name: 'IIT Bombay', id: '2' },
        { name: 'IIT Madras', id: '3' },
        { name: 'BITS Pilani', id: '4' },
        { name: 'NIT Trichy', id: '5' }
    ];

    colleges.forEach(function(college) {
        var li = document.createElement('li');
        var link = document.createElement('a');
        link.href = 'college-selection.html?id=' + college.id;
        link.textContent = college.name;
        li.appendChild(link);
        collegeList.appendChild(li);
    });
});
