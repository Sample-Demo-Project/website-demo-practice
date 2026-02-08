const courses = [
    {course: "HTML 基礎",
    student_num: 10},
    {course: "CSS 設計",
    student_num: 15},
    {course: "JavaScript 入門",
    student_num: 20},
    {course: "RWD 網頁設計",
    student_num: 5}
];
let total_student_num = 0;
for (const index in courses) {
    total_student_num += courses[index].student_num;
    courses[index].total_so_far = total_student_num;
    console.log(`course: ${courses[index].course}, Total students: ${courses[index].total_so_far}`);
}
console.log(`Final total students: ${total_student_num}`);
const label = document.getElementById("final-total");
label.textContent = "Final total students: " + total_student_num;
const tableBody = document.getElementById("course-table");
for (const index in courses) {
    const row = document.createElement("tr");
    const course_1 = document.createElement("td");
    const course_2 = document.createElement("td");
    const course_3 = document.createElement("td");
    course_1.textContent = courses[index].course;
    course_2.textContent = courses[index].student_num;
    course_3.textContent = courses[index].total_so_far;
    row.appendChild(course_1);
    row.appendChild(course_2);
    row.appendChild(course_3);
    tableBody.appendChild(row);
}
