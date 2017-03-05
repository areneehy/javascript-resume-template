var bio = {
    "name": "Renee Hyde",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "206-801-9393",
        "email": "areneehy@gmail.com",
        "github": "http://areneehy.github.io",
        "twitter": "@areneehy",
        "location": "San Diego"
    },
    "welcomeMessage": "This is my resume",
    "skills": [
        "tap dancing", "eating chimichangas"
    ],
    "biopic": "images/me.jpg"
};

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
    $("#header").append(formattedWelcome, formattedBioPic, HTMLskillsStart);


    bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });
};

var education = {
    "schools": [{
            "name": "Princeton University",
            "location": "Princeton, NJ",
            "degree": "BA",
            "majors": ["Psychology"],
            "dates": "2008-2012",
            "url": "http://princeton.edu"
        },
        {
            "name": "Princeton University",
            "location": "Princeton, NJ",
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

        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedDates);

        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedMajor);
    });

    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(course) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url);
        $(".education-entry:last").append(formattedOnlineURL);
    });
};

var work = {
    "jobs": [{
            "employer": "Candy Shop",
            "title": "Head Boss Lady",
            "location": "Istanbul, Turkey",
            "dates": "2001-present",
            "description": "Ate candy, didn't do much else"
        },
        {
            "employer": "Father Time",
            "title": "Timekeeper",
            "location": "Seattle, WA",
            "dates": "1942-present",
            "description": "Wax philosophical about the passage of time"
        }
    ]
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

var projects = {
    "projects": [{
            "title": "Project",
            "dates": "2005-2007",
            "description": "A tremendous project",
            "images": ["http://placekitten.com/400/200", "http://placekitten.com/400/200"]
        },
        {
            "title": "Project",
            "dates": "2005-2007",
            "description": "A tremendous project",
            "images": ["http://placekitten.com/400/200", "http://placekitten.com/400/200"]
        }
    ]
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);

        project.images.forEach(function(image) {
            var formattedImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedImage);
        });
    });
};


$("#mapDiv").append(googleMap);

bio.display();
education.display();
work.display();
projects.display();
