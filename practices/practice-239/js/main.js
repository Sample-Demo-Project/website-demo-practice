const form = document.getElementById("form");
const statusEl = document.getElementById("status");
const resultEl = document.getElementById("result");

// TODO 1: 寫 setStatus(text) 與 setResult(text)

// TODO 2: 寫 async function submitForm(e)
// 需求：
// - e.preventDefault()
// - 讀取 name/email/message
// - 空值顯示「請填寫完整」
// - 送出中顯示「送出中...」
// - POST http://127.0.0.1:5000/feedback (x-www-form-urlencoded 或 FormData)
// - 成功顯示回傳 JSON
// - 失敗顯示「送出失敗」

// TODO 3: 綁定 form submit
