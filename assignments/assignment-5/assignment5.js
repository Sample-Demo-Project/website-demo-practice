const registrations = [
  { name: "HTML 基礎", students: 12, category: "design" },
  { name: "CSS 視覺設計", students: 18, category: "design" },
  { name: "JavaScript 入門", students: 25, category: "programming" },
  { name: "Python 基礎", students: 20, category: "programming" },
  { name: "創業思維", students: 10, category: "business" }
];

let total_student_num = 0;
for (const index in registrations) {
    total_student_num += registrations[index].students;
    registrations[index].total_so_far = total_student_num;
    console.log(`Total students: ${registrations[index].total_so_far}`);
}

let design_sum = 0;
for (const index in registrations) {
  if(registrations[index].category === "design") {
      design_sum += registrations[index].students;
      console.log(`Design courses total: ${design_sum}}`);
  }
}

let programming_sum = 0;
for (const index in registrations) {
  if(registrations[index].category === "programming") {
      programming_sum += registrations[index].students;
      console.log(`Programming courses total: ${programming_sum}`);
  }
}

const label1 = document.getElementById("total");
label1.textContent = "Total students: " + total_student_num;
const label2 = document.getElementById("design-total");
label2.textContent = "Design courses total: " + design_sum;
const label3 = document.getElementById("programming-total");
label3.textContent = "Programming courses total: " + programming_sum;
const tableBody = document.getElementById("course-table");
for (const index in registrations) {
    const row = document.createElement("tr");
    const course_1 = document.createElement("td");
    const course_2 = document.createElement("td");
    const course_3 = document.createElement("td");
    const course_4 = document.createElement("td");
    course_1.textContent = registrations[index].name;
    course_2.textContent = registrations[index].students;
    course_3.textContent = registrations[index].category;
    course_4.textContent = registrations[index].total_so_far;
    row.appendChild(course_1);
    row.appendChild(course_2);
    row.appendChild(course_3);
    row.appendChild(course_4);
    tableBody.appendChild(row);
}