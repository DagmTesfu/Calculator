# Practice Programs

This repository contains small Bash and JavaScript exercises.

## `browserSearch.sh`

`browserSearch.sh` is a Windows Git Bash script that automates a Google search and saves a screenshot. It:

1. Creates a folder for the screenshot.
2. Opens Google Chrome and searches for JavaScript array and object examples.
3. Waits five seconds for the page to load.
4. Uses PowerShell to capture the primary screen.
5. Moves the screenshot into the destination folder and prints its location.

Run it from Git Bash:

```bash
bash browserSearch.sh
```

The script requires Google Chrome, Git Bash, and Windows PowerShell.

## `studentmanager.js`

`studentmanager.js` demonstrates how to manage an array of student objects in JavaScript. Each student contains a name, age, and skill list. The `manageStudents` function supports two actions:

- `add` uses `push()` to place a new student at the end of the array.
- `remove` uses `pop()` to remove and return the last student.

The program adds `newStudent`, removes the last student, and then prints the skill list of the second original student.

Run it with Node.js:

```bash
node studentmanager.js
```
