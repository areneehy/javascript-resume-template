```
"degree": "BA",
"majors": ["Psychology"],
"dates": "2008-2012",
"url": "http://princeton.edu"
}
],
"onlineCourses": [{
"title": "Front-End Web Development",
"school": "Udacity",
"dates": "2017 - present",
"url": "http://udacity.com"
}]
};

education.display = function() {
education.schools.forEach(function(school) {
$("#education").append(HTMLschoolStart);

var formattedName = HTMLschoolName.replace("%data%", school.name);
var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
var formattedTitle = formattedName + formattedDegree;
$(".education-entry:last").append(formattedTitle);

var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
$(".education-entry:last").append(formattedLocation);
```
