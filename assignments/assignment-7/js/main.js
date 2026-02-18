const titleInput = document.getElementById("titleInput");
const yearInput = document.getElementById("yearInput");
const addBtn = document.getElementById("addBtn");
const getIdInput = document.getElementById("getIdInput");
const getBtn = document.getElementById("getBtn");
const putIdInput = document.getElementById("putIdInput");
const putTitleInput = document.getElementById("putTitleInput");
const putYearInput = document.getElementById("putYearInput");
const putBtn = document.getElementById("putBtn");
const deleteIdInput = document.getElementById("deleteIdInput");
const deleteBtn = document.getElementById("deleteBtn");

const addStatus = document.getElementById("addStatus");
const getStatus = document.getElementById("getStatus");
const putStatus = document.getElementById("putStatus");
const deleteStatus = document.getElementById("deleteStatus");
const resultEl = document.getElementById("result");

// TODO 1: 寫 setStatus(setter, text) 與 setResult(text)

// TODO 2: 寫 async function addMovie()
// 需求：
// - 讀取 title/year
// - 空字串顯示「請輸入片名」
// - 送出中顯示「新增中...」
// - POST http://127.0.0.1:5000/movies
// - body: { title, year }
// - 成功顯示回傳 JSON
// - 失敗顯示「新增失敗」

// TODO 3: 寫 async function getMovie()
// 需求：
// - 讀取 id
// - 空值顯示「請輸入 id」
// - 查詢中顯示「查詢中...」
// - GET http://127.0.0.1:5000/movies/{id}
// - 404 顯示「找不到」
// - 成功顯示回傳 JSON

// TODO 4: 寫 async function updateMovie()
// 需求：
// - 讀取 id/title/year
// - 空值顯示「請輸入 id / 片名 / 年份」
// - 更新中顯示「更新中...」
// - PUT http://127.0.0.1:5000/movies/{id}
// - body: { title, year }
// - 成功顯示回傳 JSON
// - 失敗顯示「更新失敗」

// TODO 5: 寫 async function deleteMovie()
// 需求：
// - 讀取 id
// - 空值顯示「請輸入 id」
// - 刪除中顯示「刪除中...」
// - DELETE http://127.0.0.1:5000/movies/{id}
// - 成功顯示「已刪除」
// - 404 顯示「找不到」

// TODO 6: 綁定按鈕事件
