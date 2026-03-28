from flask import Flask, request, jsonify

app = Flask(__name__)

tasks = []
current_id = 1


@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    return response


@app.route("/v2/tasks", methods=["OPTIONS"])
def tasks_preflight():
    return "", 204


@app.route("/v2/tasks/<int:task_id>", methods=["OPTIONS"])
def task_preflight(task_id):
    return "", 204


@app.route("/v2/tasks/stats", methods=["OPTIONS"])
def stats_preflight():
    return "", 204


@app.get("/v2/tasks")
def get_tasks():
    # TODO:
    # 1. 讀取 query string completed（true / false）
    # 2. 若有 completed，依狀態篩選 tasks
    # 3. 回傳 { total, tasks }


@app.post("/v2/tasks")
def create_task():
    # TODO:
    # 1. 讀取 JSON body 的 title
    # 2. 建立新任務（id, title, completed=false）
    # 3. 加入 tasks，回傳新任務（201）


@app.put("/v2/tasks/<int:task_id>")
def update_task(task_id):
    # TODO:
    # 1. 讀取 JSON body 的 completed
    # 2. 找到 id 對應任務並更新完成狀態
    # 3. 回傳 { message, task }
    # 4. 找不到則回傳 404


@app.delete("/v2/tasks/<int:task_id>")
def delete_task(task_id):
    # TODO:
    # 1. 刪除指定 id 的任務
    # 2. 成功回傳 { message: "Task deleted" }
    # 3. 找不到回傳 404


@app.get("/v2/tasks/stats")
def stats():
    # TODO:
    # 1. 計算 total / completed / pending / completion_rate
    # 2. 回傳統計 JSON


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5001, debug=True)
