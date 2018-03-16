
from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:santalucija.17@localhost/postgres'
#app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://oqohwgynmgqsxm:b5f5843c775ca58d631c778c0782cfef500f3047f2be7fdb55bd2a5897760e45@ec2-54-243-239-66.compute-1.amazonaws.com:5432/d3ltbive0hq71h?sslmode=require'
db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = "UserDetails"
    user = db.Column(db.String(), primary_key=True)
    password = db.Column(db.String())
    email = db.Column(db.String())

    def __init__(self, user_, password_, email_):
        self.user_ = user_
        self.password_ = password_
        self.email_ = email_




@app.route("/login", methods=['POST'])
def login():
    if request.method == 'POST':
        username = request.form["email"]
        password = request.form["password"]

        if(username == 'matthew'):
            return "Matthew"
        else:
            return "this is not matthew"


        # if db.session.query(User).filter(User.user_ == username) and db.session.query(User).filter(User.user_ == password):
        #     return render_template("success.html")
        # else:
        #     return render_template("login.html")

@app.route("/register", methods=['POST'])
def register():
    if request.method == 'POST':
        email = request.form["email_field_name"]
        password = request.form["password_field_name"]
        username = request.form["password_field_name"]
        if username in db.User.user_:
            error = 'Username already taken. Choose another'
            return render_template("login.html")
        elif username in db.session.query(User.email_):
            error = 'Email already registered. Login or register with another Email'
            return render_template("login.html")
        else:
            user = User(
                email,
                password,
                # form.confirm.data ,
                username
            )
            return render_template("login.html")


if __name__ == '__main__':
    app.debug = True
    app.run()
