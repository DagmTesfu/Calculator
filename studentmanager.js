const students = [
    {
        name: "Abeni",
        age: 20,
        skill: ["html","css"]
    },
    {
        name: "Alazer",
        age: 19,
        skill: ["Java,JS"]
    }
];

const manageStudents = (action,student) => {
    if (action === "add"){
        return students.push(student);
    }
    else if (action === "remove"){
        return students.pop(student);
    }
    else {
        return "Invalid action. Use add or remove.";
    }
}

const newStudent = {
    
        name: "Dagm",
        age: 19,
        skill: ["git", "react"]

    
}


manageStudents("add",newStudent);
// console.log(students);
manageStudents("remove");
console.log(students[1].skill);









