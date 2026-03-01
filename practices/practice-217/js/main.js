// TODO 1：建立一個陣列，放三段文字訊息
let messages = [
    "第一段訊息：歡迎來到我們的網站！",
    "第二段訊息：我們提供各種有趣的內容。",
    "第三段訊息：請隨時聯繫我們！"
];
console.log(messages);

// TODO 2：完成 showMessage function
function showMessage(index) {
    const output = document.getElementById("output");
    output.textContent = messages[index];
}
// 接收 index，並顯示對應的陣列內容到 output