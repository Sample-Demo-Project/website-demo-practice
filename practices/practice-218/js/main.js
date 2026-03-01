// TODO 1：建立陣列 todos
// 每一筆資料格式：{ text: "xxx", done: false }
const todos = [
    // 你可以先放 1~2 筆範例資料（也可以留空）
    { text: "買牛奶", done: false },
    { text: "寫作業", done: false }
];

// TODO 2：render() - 把 todos 內容顯示到 #todo-list（用 innerHTML 產生）
function render() {
    // 1) 取得 todo-list 容器
    // 2) 依序產生每一個 item 的 HTML
    // 3) 每個 item 要有：
    //    - 顯示文字
    //    - 「完成/取消完成」按鈕
    //    - 「刪除」按鈕
    // 4) done=true 時，item 要加上 class="item done"
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = ""; // 先清空原有內容
    for (const index in todos) {   
        const item = document.createElement("li");
        item.textContent = todos[index].text;
        const toggleButton = document.createElement("button");
        toggleButton.textContent = "完成/取消完成";
        toggleButton.addEventListener("click", function() {
            toggleDone(index);  
        });
        const removeButton = document.createElement("button");
        removeButton.textContent = "刪除";
        removeButton.addEventListener("click", function() {
            removeTodo(index);  
        });
        item.appendChild(toggleButton);
        item.appendChild(removeButton);
        if (todos[index].done === false) {
            todoList.appendChild(item);
        }
    }
}

// TODO 3：addTodo() - 從 input 讀文字，推進 todos，清空 input，render()
function addTodo() {
    // 1) 讀取 input.value
    // 2) 如果是空字串（或只有空白）就不要新增
    // 3) push 到 todos
    // 4) 清空 input
    // 5) render()
    const input = document.getElementById("todo-input");
    if (input.value.trim() === "") {
        return; // 不新增空白項目
    }
    todos.push({ text: input.value, done: false});
    input.value = "";
    render();
}

// TODO 4：toggleDone(index) - 切換 todos[index].done，render()
function toggleDone(index) {
    // 切換 done true/false
    // render()
    todos[index].done = !todos[index].done;
    render();
}

// TODO 5：removeTodo(index) - 刪除指定項目（splice），render()
function removeTodo(index) {
    // todos.splice(index, 1)
    // render()
    todos.splice(index, 1);
    render();
}

// 進入頁面先渲染一次
render();