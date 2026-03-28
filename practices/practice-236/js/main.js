const productInput = document.getElementById("productInput");
const scoreInput = document.getElementById("scoreInput");
const postBtn = document.getElementById("postBtn");
const statusEl = document.getElementById("status");
const resultEl = document.getElementById("result");

// TODO 1: 寫 setStatus(text) 與 setResult(text)

// TODO 2: 寫 async function submitRating()
// 需求：
// - 讀取 product / score
// - 空值或分數不在 1-5，顯示「請輸入正確分數」
// - 送出中顯示「送出中...」
// - POST 到 http://127.0.0.1:5000/rating
// - body: { product, score }
// - 成功顯示回傳 JSON
// - 失敗顯示「送出失敗」

// TODO 3: 綁定按鈕事件
