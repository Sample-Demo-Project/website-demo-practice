// ===============================
// Todo Dashboard (Answer)
// ===============================

const todos = [
  { text: "完成 HTML 作業", done: false },
  { text: "複習 CSS Flex 排版", done: true },
  { text: "開始 JavaScript 練習", done: false },
  { text: "整理下週待辦事項", done: false }
];

const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

const statTotal = document.getElementById("stat-total");
const statDone = document.getElementById("stat-done");
const statUndone = document.getElementById("stat-undone");

// 事件：新增
addBtn.addEventListener("click", addTodo);

// （加分：Enter 新增）
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addTodo();
});

function render() {
  list.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const item = document.createElement("div");
    item.className = "item" + (todos[i].done ? " done" : "");

    const text = document.createElement("div");
    text.className = "text";
    text.textContent = todos[i].text;

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = todos[i].done ? "Done" : "Todo";

    item.appendChild(text);
    item.appendChild(badge);

    // 點擊切換完成狀態
    item.addEventListener("click", function () {
      toggleDone(i);
    });

    list.appendChild(item);
  }

  updateStats();
}

function addTodo() {
  const text = input.value.trim();
  if (text === "") return;

  todos.push({ text: text, done: false });
  input.value = "";
  render();
}

function toggleDone(index) {
  todos[index].done = !todos[index].done;
  render();
}

function updateStats() {
  const total = todos.length;

  let doneCount = 0;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].done) doneCount++;
  }

  const undoneCount = total - doneCount;

  statTotal.textContent = String(total);
  statDone.textContent = String(doneCount);
  statUndone.textContent = String(undoneCount);
}

render();
