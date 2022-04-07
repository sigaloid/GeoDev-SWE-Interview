from flask import Flask
import requests
import json

app = Flask(__name__)

@app.route("/")
def hello_world():
    response = requests.get("http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json")
    weatherData = response.json() 
    # print(weatherData)

    direction = weatherData['dataseries'][0]["wind10m"]["direction"]
    speed = weatherData['dataseries'][0]["wind10m"]["speed"]
    
    windData = { "direction": direction, "speed": speed }
    return str(windData)