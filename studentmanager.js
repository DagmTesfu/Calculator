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
    // Check which operation the caller wants to perform.
    if (action === "add"){
        // Add the student argument to the end of the students array.
        // push() returns the new length of the array.
        return students.push(student);
    }
    else if (action === "remove"){
        // Remove and return the last student. pop() does not take an argument.
        return students.pop();
    }
    else {
        // Run this branch when action is neither "add" nor "remove".
        return "Invalid action. Use add or remove.";
    }
}

// This object is passed to manageStudents as the student argument.
const newStudent = {
    
        name: "Dagm",
        age: 19,
        skill: ["git", "react"]

    
}


manageStudents("add",newStudent); // Adds newStudent to the end of students.

manageStudents("remove"); // Removes the last item, which is newStudent.
console.log(students[1].skill); // Prints the skill array of the second student.









