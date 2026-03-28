from flask import Flask, request, jsonify

app = Flask(__name__)

movies = {}
next_id = 1


@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    return response


@app.route("/movies", methods=["OPTIONS"])
def movies_preflight():
    return "", 204


@app.route("/movies/<int:movie_id>", methods=["OPTIONS"])
def movie_preflight(movie_id):
    return "", 204


# TODO: Please implement the APIs


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5001, debug=True)
