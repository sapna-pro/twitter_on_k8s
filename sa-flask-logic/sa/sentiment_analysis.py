# from textblob import TextBlob
# from flask import Flask, request, jsonify

# app = Flask(__name__) 
# @app.route("/testHealth") 
# def hello():
#  return "Hello from python sentiment analysis flask app!" 
 
# @app.route("/analyse/sentiment", methods=['POST']) 
# def analyse_sentiment():
#     sentence = request.get_json()['sentence'] 
#     polarity = TextBlob(sentence).sentences[0].polarity
#     return jsonify(
#         sentence=sentence, polarity=polarity
#     )
# # use + for spaces, i.e. http://localhost:5000/analyse?sentence=i+am+so+happy! 
# @app.route("/analyse", methods=['GET']) 
# def analyse_sentiment_get():
#     sentence = request.args.get('sentence') 
#     polarity = TextBlob(sentence).sentences[0].polarity
    
#     return str(polarity)

# if __name__ == '__main__':
#  app.run(host='0.0.0.0', port=5000)

from textblob import TextBlob
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/testHealth")
@cross_origin()
def testHealth():
    return "Here at Flask App Sentiment Analysis!"

@app.route("/testComms", methods=['GET'])
@cross_origin()
def testComms():
    response = requests.get('http://192.168.99.100:8080/testHealth')
    return response.text

@app.route("/analyse/sentiment", methods=['POST'])
@cross_origin()
def analyse_sentiment():
    sentence = request.get_json()['sentence']
    polarity = TextBlob(sentence).sentences[0].polarity
    return jsonify(
        sentence=sentence,
        polarity=polarity
    )

# use + for spaces, i.e. http://localhost:5000/analyse?sentence=i+am+so+happy!
@app.route("/analyse", methods=['GET'])
@cross_origin()
def analyse_sentiment_get():
    sentence = request.args.get('sentence')
    polarity = TextBlob(sentence).sentences[0].polarity
    return str(polarity)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050)