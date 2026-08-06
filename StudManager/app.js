const searchBar = document.getElementById("search");
const sortGrade = document.getElementById("sort-grade");
const sortName = document.getElementById("sort-name");
const studAbove = document.getElementById("stud-above-80");
const resetFilter = document.getElementById("reset-filter");
const avGrade = document.getElementById("avg-grade");
const averageResult = document.getElementById('averageResult');

// Get average grade of the students
avGrade.addEventListener("click", function(){
    let totalGarde = 0;

    students.forEach(function(student){
        totalGarde += student.grade;
    });

    const averageGrade = totalGarde / students.length;
    averageResult.textContent = `Average Grade: ${averageGrade.toFixed(2)}`

    if (students.length === 0) {
    averageResult.textContent = "No students available";
    return;
}
})

//Reset the filter
resetFilter.addEventListener("click", function(){
    displayStudents(students);
    averageResult.textContent = "";
});


// Filtering grade above 80
studAbove.addEventListener("click", function(){
const above80 = students.filter(function(student){
    return student.grade > 80;
});

displayStudents(above80);

});


// Sorting by student name
sortName.addEventListener("click", function(){
    const sortedName = [...students].sort(function(a,b){
        return a.name.localeCompare(b.name);
    });

    displayStudents(sortedName);
});

// Sorting using student grade
sortGrade.addEventListener("click", function(){
    const sortedStud = [...students].sort(function(a,b) {
        return b.grade - a.grade;
    });

    displayStudents(sortedStud);
});

// Filtering using alphabetically
searchBar.addEventListener("input", function(){
    const searchText = searchBar.value.toLowerCase().trim();

    const filteredStudents = students.filter(function(student){
        return student.name.toLocaleLowerCase().includes(searchText);
    });
    displayStudents(filteredStudents);
})

const students = [
    {
        id: 1,
        name: "Jhon",
        age: 20,
        course: "Computer Science",
        grade: 89
    },
       {
        id: 2,
        name: "Moxley",
        age: 35,
        course: "Medicine",
        grade: 94
    },
       {
        id: 3,
        name: "Kebede",
        age: 55,
        course: "Civil",
        grade: 66
    }
    
]

// Displaying the names
function displayStudents(studentArray) {
    // Display data on the page
      const gridContainer = document.getElementById("list");

      const totalStud = document.getElementById("total-counts");
      totalStud.textContent = studentArray.length;

      gridContainer.innerHTML = " ";
      const cardHtml = studentArray.map(student =>   `<div class="student-card">
            <h3>${student.name}</h3>
            <p><strong>ID:</strong> ${student.id}</p>
            <p><strong>Major:</strong> ${student.course}</p>
            <p><strong>Grade:</strong> ${student.grade}</p>
        </div>`).join(" ");

         gridContainer.innerHTML = cardHtml;
}
displayStudents(students);


