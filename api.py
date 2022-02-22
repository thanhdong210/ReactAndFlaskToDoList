from email.policy import default
from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///exemple.db"
db = SQLAlchemy(app)

migrate = Migrate(app, db)

""" class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    state = db.Column(db.Boolean, default=False)

    def __str__(self):
        return f'{self.id} {self.content} {self.content}' """

class Todo3(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    state = db.Column(db.Boolean, default=False)

    def __str__(self):
        return f'{self.id} {self.content} {self.content}'

def todo_serializer(todo):
    return {
        'id': todo.id,
        'content': todo.content,
        'state': todo.state
    }

@app.route('/api', methods=['GET'])
def all():
    return jsonify([*map(todo_serializer, Todo3.query.all())])

@app.route('/api/create', methods=['POST'])
def create():
    request_data = json.loads(request.data)
    todo = Todo3(content=request_data['content'])

    db.session.add(todo)
    db.session.commit()

    return {'201': 'your work is being added'}

@app.route('/api/<int:id>')
def show(id):
    return jsonify([*map(todo_serializer, Todo3.query.filter_by(id=id))])

@app.route('/api/delete/<int:id>', methods=['POST'])
def delete(id):
    request_data = json.loads(request.data)
    Todo3.query.filter_by(id=request_data['id']).delete()
    db.session.commit()

    return { '204': 'delete successfully' }

@app.route('/api/update/<int:id>', methods=['POST'])
def update(id):
    request_data = json.loads(request.data)
    
    todo = Todo3.query.filter_by(id=request_data['id']).first()

    todo.state = request_data['state']
    db.session.commit()
    
    return {'201': 'your work is being updated'}

if __name__ == '__main__':
    app.run(debug=True)

