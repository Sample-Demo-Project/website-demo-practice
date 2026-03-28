from flask import Flask, request, jsonify

app = Flask(__name__)

notes = {}
next_id = 1


@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    return response


@app.route("/notes", methods=["OPTIONS"])
def notes_preflight():
    return "", 204


@app.route("/notes/<int:note_id>", methods=["OPTIONS"])
def note_preflight(note_id):
    return "", 204


# TODO: Implement APIs


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
