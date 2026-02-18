const postBtn = document.getElementById("postBtn");
const statusEl = document.getElementById("status");
const resultEl = document.getElementById("result");

// TODO 1: 寫 setStatus(text) 與 setResult(text)

// TODO 2: 寫 async function postMessage()
// 需求：
// - 顯示狀態「送出中...」
// - 用 fetch POST 到 https://jsonplaceholder.typicode.com/posts
// - body 固定送出：{ title: "Hello", body: "Practice", userId: 1 }
// - 成功把回傳 JSON 顯示在 result
// - 失敗顯示「送出失敗」

// TODO 3: 綁定按鈕事件
