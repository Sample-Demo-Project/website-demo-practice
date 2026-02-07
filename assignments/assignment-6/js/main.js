// ===============================
// Todo Dashboard
// 事件一律用 addEventListener
// ===============================

// 系統資料（可用，也可自行增減）
const todos = [
  { text: "完成 HTML 作業", done: false },
  { text: "複習 CSS Flex 排版", done: true },
  { text: "開始 JavaScript 練習", done: false },
  { text: "整理下週待辦事項", done: false }
];

// 取得 DOM
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

const statTotal = document.getElementById("stat-total");
const statDone = document.getElementById("stat-done");
const statUndone = document.getElementById("stat-undone");

// TODO 1：替「新增按鈕」綁 click 事件 → 呼叫 addTodo()
// addBtn.addEventListener("click", ...)

// （follow-up）TODO：替 input 綁 keydown，按 Enter 也能新增（可做可不做）

// TODO 2：render()：
// - 依照 todos 重新渲染清單（不可寫死）
// - 每筆任務要顯示：文字 + badge（Done / Todo）
// - done=true 時，item 要有 class "done"
// - 每個 item 要能點擊切換完成狀態（用 addEventListener 綁在 item 上）
function render() {
  // 1) 清空 list
  // 2) for 迴圈跑 todos
  // 3) createElement 建 item
  // 4) item.addEventListener("click", () => toggleDone(index))
  // 5) appendChild 到 list
  // 6) 更新統計 updateStats()
}

// TODO 3：addTodo()：
// - 讀 input.value（trim）
// - 空字串不新增
// - push {text, done:false} 進 todos
// - 清空 input
// - render()
function addTodo() {

}

// TODO 4：toggleDone(index)：
// - 切換 todos[index].done
// - render()
function toggleDone(index) {

}

// TODO 5：updateStats()：
// - 更新：總數、已完成、未完成
function updateStats() {

}

// 進入頁面先畫一次
render();
