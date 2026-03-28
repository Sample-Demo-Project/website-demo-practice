const noteInput = document.getElementById("noteInput");
const idInput = document.getElementById("idInput");
const addBtn = document.getElementById("addBtn");
const getBtn = document.getElementById("getBtn");
const addStatus = document.getElementById("addStatus");
const getStatus = document.getElementById("getStatus");
const resultEl = document.getElementById("result");

// TODO 1: 寫 setAddStatus(text), setGetStatus(text), setResult(text)

// TODO 2: 寫 async function addNote()
// 需求：
// - 讀取 noteInput
// - 空字串顯示「請輸入內容」
// - 送出中顯示「新增中...」
// - POST 到 http://127.0.0.1:5000/notes
// - body: { content }
// - 成功顯示回傳 JSON
// - 失敗顯示「新增失敗」

// TODO 3: 寫 async function getNote()
// 需求：
// - 讀取 idInput
// - 空值顯示「請輸入 id」
// - 查詢中顯示「查詢中...」
// - GET http://127.0.0.1:5000/notes/{id}
// - 成功顯示回傳 JSON
// - 404 顯示「找不到」
// - 失敗顯示「查詢失敗」

// TODO 4: 綁定按鈕事件
