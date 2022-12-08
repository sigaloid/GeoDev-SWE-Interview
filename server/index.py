from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route("/", methods = ['GET'])
def hello_world():
    williamsburgLongitude = "-76.70"
    williamsburgLatitude = "37.27"
    response = requests.get("http://www.7timer.info/bin/api.pl?lon={}&lat={}&product=astro&output=json".format(williamsburgLongitude,williamsburgLatitude))
    weatherData = response.json() 
    # if you get ever stuck:
    # print(weatherData['dataseries'][0])

    direction = weatherData['dataseries'][0]["wind10m"]["direction"]
    speed = weatherData['dataseries'][0]["wind10m"]["speed"]
    temp = weatherData['dataseries'][0]["temp2m"]
    windData = { "direction": direction, "speed": speed, "temp": temp }
    response = jsonify(windData)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response