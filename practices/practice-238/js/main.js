const titleInput = document.getElementById("titleInput");
const addBtn = document.getElementById("addBtn");
const filterSelect = document.getElementById("filterSelect");
const listBtn = document.getElementById("listBtn");
const updateIdInput = document.getElementById("updateIdInput");
const completedSelect = document.getElementById("completedSelect");
const updateBtn = document.getElementById("updateBtn");
const deleteIdInput = document.getElementById("deleteIdInput");
const deleteBtn = document.getElementById("deleteBtn");
const statsBtn = document.getElementById("statsBtn");

const addStatus = document.getElementById("addStatus");
const listStatus = document.getElementById("listStatus");
const updateStatus = document.getElementById("updateStatus");
const deleteStatus = document.getElementById("deleteStatus");
const statsStatus = document.getElementById("statsStatus");
const resultEl = document.getElementById("result");

// TODO 1: 寫 setStatus(el, text) 與 setResult(text)

// TODO 2: 寫 async function addTask()
// 需求：
// - 讀取 titleInput
// - 空字串顯示「請輸入內容」
// - 送出中顯示「新增中...」
// - POST http://127.0.0.1:5000/v2/tasks
// - body: { title }
// - 成功顯示回傳 JSON
// - 失敗顯示「新增失敗」

// TODO 3: 寫 async function listTasks()
// 需求：
// - 讀取 filterSelect
// - GET http://127.0.0.1:5000/v2/tasks?completed=true/false
// - 查詢中顯示「查詢中...」
// - 成功顯示回傳 JSON

// TODO 4: 寫 async function updateTask()
// 需求：
// - 讀取 updateIdInput / completedSelect
// - 空值顯示「請輸入 id」
// - 更新中顯示「更新中...」
// - PUT http://127.0.0.1:5000/v2/tasks/{id}
// - body: { completed }
// - 404 顯示「找不到」
// - 成功顯示回傳 JSON

// TODO 5: 寫 async function deleteTask()
// 需求：
// - 讀取 deleteIdInput
// - 空值顯示「請輸入 id」
// - 刪除中顯示「刪除中...」
// - DELETE http://127.0.0.1:5000/v2/tasks/{id}
// - 404 顯示「找不到」
// - 成功顯示回傳 JSON

// TODO 6: 寫 async function getStats()
// 需求：
// - 查詢中顯示「查詢中...」
// - GET http://127.0.0.1:5000/v2/tasks/stats
// - 成功顯示回傳 JSON

// TODO 7: 綁定按鈕事件
