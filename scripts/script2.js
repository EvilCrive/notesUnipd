const init = () => { 
    const h3_title = document.createElement("h3");
    const p_introduction = document.createElement("p");
    const p_errors = document.createElement("p");
    const subjects_ol = document.createElement("ol");

    document.body.appendChild(h3_title);
    document.body.appendChild(p_introduction);
    document.body.appendChild(p_errors);
    document.body.appendChild(subjects_ol);

    h3_title.appendChild(document.createTextNode("HomePage"));
    p_introduction.innerHTML = "Here we have a list of subjects with their notes well-listed, order by year :";
    subjects_ol.id = "listSubjects";
    p_errors.id = "debug";
}

const setupSubjects = () => {
    const subject = new Map();
    subject.set("First year", ["Analysis", "Algebra and Discrete Mathematics", "Computers Architecture", "Logic", "Operative Systems", "Programming"]);
    subject.set("Second year", ["Algorithms and Data Structures", "Automata", "Data Bases", "Numerical Calculation", "Probability and Statistics", "OOP Programming", "Networks and Security"]);
    subject.set("Third year", ["Economics and Business Organization", "Operational Research", "Web Technologies", "Open-Source Technologies", "Software Engineer", "Concurrent and Distributed Programming"]);
    subject.set("Fourth year", ["Machine Learning", "Inferential Statistics", "Search Engines", "Bioinformatics", "Structural Bioinformatics", "Deep Learning"]);
    subject.set("Fifth year", ["Distributed Systems", "NGS and Computational Genomics", "Learning From Networks", "Advanced Algorithm Design"]);
    return subject;
}

const getHref = (year, course) => {
    const refinedYear = year.split(" ");
    
    refinedYear[0] = refinedYear[0].toLowerCase();
    const tmpYear = refinedYear[1].split("");
    tmpYear[0] = tmpYear[0].toUpperCase();
    refinedYear[1] = tmpYear.join("");
    
    let refinedCourse = course.split(" ");
    let i = 0;
    for (; i < refinedCourse.length; i++) {
        if (refinedCourse[i] == "and") {
            refinedCourse[i] = '_';
        }
    }
    refinedCourse = refinedCourse.join("").split("");
    refinedCourse[0] = refinedCourse[0].toLowerCase();
    

    refinedCourse = refinedCourse.join("");
    return "courses/" + refinedYear.join("") + "/" + refinedCourse + ".html";
}

const createLists = (subjects) => {
    const subjects_old = document.getElementById("listSubjects");
    for (const [year, courses] of subjects) {
        const bulletPoint_year = document.createElement("li");
        const p_yearIntro = document.createElement("p");
        const ul_courses = document.createElement("ul");
        subjects_old.appendChild(bulletPoint_year);
        bulletPoint_year.appendChild(p_yearIntro);
        bulletPoint_year.appendChild(ul_courses);
        p_yearIntro.innerHTML = year + " courses:";

        for (const course of courses) {
            const bulletPoint_course = document.createElement("li");
            const a_linkCoursePage = document.createElement("a");
            bulletPoint_course.appendChild(a_linkCoursePage);
            ul_courses.appendChild(bulletPoint_course);
            a_linkCoursePage.innerHTML = course;
            a_linkCoursePage.href = getHref(year, course);
        }

    }
    
}

const error_display = (string) => {
    document.getElementById("debug").innerHTML = string;
}

init();
const subjects = setupSubjects();
createLists(subjects);


