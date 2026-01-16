const container = document.getElementById("practice-list");
var startNum = 210, endNum = 213
for (let i = startNum; i <= endNum; i++) {
    const section = document.createElement("section");
    section.className = "card";

    section.innerHTML = `
        <h2>Practice ${i}</h2>
        <a href="practices/practice-${i}/practice${i}.html">View Practice</a>
    `;

    container.appendChild(section);
}
