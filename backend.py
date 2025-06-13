# backend.py
from flask import Flask, jsonify, request
from flask_cors import CORS  # to allow frontend to call backend

app = Flask(__name__)
CORS(app)  

# Sample user data
users = [
    {"id": 1, "name": "Saksham"},
    {"id": 2, "name": "Ravi"},
    {"id": 3, "name": "Anjali"}
]

# GET endpoint to return user data
@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify(users)
@app.route('/api/users', methods=['POST'])
def add_user():
    data = request.json
    new_id = len(users) + 1
    new_user = {"id": new_id, "name": data["name"]}
    users.append(new_user)
    return jsonify({"message": "User added", "user": new_user}), 201
@app.route('/api/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    data = request.json
    for user in users:
        if user['id'] == user_id:
            user['name'] = data['name']
            return jsonify({"message": "User updated", "user": user})
    return jsonify({"error": "User not found"}), 404

# DELETE: Delete user by ID
@app.route('/api/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    global users
    users = [user for user in users if user['id'] != user_id]
    return jsonify({"message": f"User with ID {user_id} deleted"})

if __name__ == '__main__':
    app.run(debug=True)
