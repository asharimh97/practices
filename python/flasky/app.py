from flask import Flask, request, render_template

app = Flask(__name__)

app.secret_key = "M4sImoe3nk sa!iki MaiN3 Vap3"

def write_to_file(stub, data):
  with open("static/articles/{}.txt".format(stub), "w+") as f:
    f.write(data)

def read_from_file(stub):
  with open("static/articles/{}.txt".format(stub)) as f:
    return f.readlines()


@app.route("/")
def index():
  return render_template("home.html")

@app.route("/article/<stub>")
def read_article(stub):
  description=read_from_file(stub)
  return render_template(
    "article.html",
    title=stub,
    description=description
  )

@app.route("/article/<stub>/json")
def read_article_json(stub):
  data=read_from_file(stub)
  return dict(title=stub, description=data)

@app.route("/article", methods=["GET", "POST"])
def post_article():
  if request.method == "GET":
    return render_template("post_article.html")
  elif request.method == "POST":
    title = request.form["title"]
    description = request.form["description"]
    print(title)
    print(description)
    write_to_file(title, description)
    return render_template(
      "article.html",
      title=title,
      description=description)

if __name__ == "__main__":
  app.run(port=8000, debug=True)