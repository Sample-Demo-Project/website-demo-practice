const container = document.getElementById("practice-list");

/* ===== 設定區 ===== */
const practices = {
    title: "Practice",
    start: 210,
    end: 220,
    basePath: "practices",
    filePrefix: "practice"
};

/* ===== 產生區 ===== */
for (let i = practices.start; i <= practices.end; i++) {
    const section = document.createElement("section");
    section.className = "card";

    section.innerHTML = `
        <h2>${practices.title} ${i}</h2>
        <a href="${practices.basePath}/${practices.filePrefix}-${i}/${practices.filePrefix}${i}.html">
            View ${practices.title}
        </a>
    `;

    container.appendChild(section);
}

const assignments = {
    title: "Assignment",
    start: 4,
    end: 6,
    basePath: "assignments",
    filePrefix: "assignment"
};

for (let i = assignments.start; i <= assignments.end; i++) {
    const section = document.createElement("section");
    section.className = "card";

    section.innerHTML = `
        <h2>${assignments.title} ${i}</h2>
        <a href="${assignments.basePath}/${assignments.filePrefix}-${i}/${assignments.filePrefix}${i}.html">
            View ${assignments.title}
        </a>
    `;

    container.appendChild(section);
}
