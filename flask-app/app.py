from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///bookings.db'
db = SQLAlchemy(app)

class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    email = db.Column(db.String(100))
    date = db.Column(db.Date, nullable=False)
    time = db.Column(db.Time, nullable=False)
    number_of_people = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f"<Booking {self.date} at {self.time} for {self.number_of_people} people>"

@app.route('/book', methods=['POST'])
def book():
    first_name = request.json.get('first_name')
    last_name = request.json.get('last_name')
    email = request.json.get('email')
    date = datetime.strptime(request.json['date'], '%Y-%m-%d').date()
    time = datetime.strptime(request.json['time'], '%H:%M').time()
    number_of_people = int(request.json['number_of_people'])

    if Booking.query.filter_by(date=date, time=time).first():
        return jsonify({"error": "This slot is already booked"}), 400

    if number_of_people < 1 or number_of_people > 24:
        return jsonify({"error": "Invalid number of people"}), 400

    new_booking = Booking(first_name=first_name, last_name=last_name, email=email, date=date, time=time, number_of_people=number_of_people)
    db.session.add(new_booking)
    db.session.commit()

    return jsonify({"message": "Booking successful"}), 201

@app.route("/info")
def data():
    bookings = Booking.query.all()
    return jsonify([{"id": booking.id, "first_name": booking.first_name, "last_name": booking.last_name, "email": booking.email, "date": booking.date.strftime('%Y-%m-%d'), "time": booking.time.strftime('%H:%M'), "number_of_people": booking.number_of_people} for booking in bookings])

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)
