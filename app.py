# import necessary libraries
from models import create_classes
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################

from flask_sqlalchemy import SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or "sqlite:///db.sqlite"

# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

Thrift = create_classes(db)

#create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")


# Query the database and send the jsonified results
@app.route("/send", methods=["GET", "POST"])
def send():
    if request.method == "POST":
        item = request.form["thriftItem"]
        size = request.form["thriftSize"]
        name = request.form["thriftName"]
        color = request.form["thriftColor"]
        maxprice = request.form["thriftMaxprice"]
        condition = request.form["thriftCondition"]
        notes = request.form["thriftNotes"]

        thrift = Thrift(item=item, size=size, name=name, color=color, maxprice=maxprice, condition=condition, notes=notes)
        db.session.add(thrift)
        db.session.commit()
        return redirect("/", code=302)

    return redirect("/", code=302)

@app.route("/form")
def form():
    return render_template("form.html")


@app.route("/api/clothes")
def clothes():
    results = db.session.query(Thrift.id, Thrift.item, Thrift.size, Thrift.name, Thrift.color, Thrift.maxprice, Thrift.condition, Thrift.notes).all()

    id = [result[0] for result in results]
    item = [result[1] for result in results]
    size = [result[2] for result in results]
    name = [result[3] for result in results]
    color = [result[4] for result in results]
    maxprice = [result[5] for result in results]
    condition = [result[6] for result in results]
    notes = [result[7] for result in results]
    
    thrift_data = []
    
    for i in range(len(id)):
        thrift_data.append({
        "item": item[i],
        "size": size[i],
        "name": name[i],
        "color": color[i],
        "maxprice": maxprice[i],
        "condition": condition[i],
        "notes": notes[i],
        "id": id[i]
        })

    return jsonify(thrift_data)

@app.route("/remove", methods=["GET", "POST"])
def remove():
    if request.method == "POST":
        #db.session.remove
        print(id)
        return jsonify(id)
    return jsonify("kind of fail")

if __name__ == "__main__":
    app.run()
