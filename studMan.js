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
  switch(action){
    case "add":
        return students.push(student);
    case "remove":
        return students.pop(student);
    default:
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

console.log(students);









