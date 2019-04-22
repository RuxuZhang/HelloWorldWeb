from flask import make_response, abort
from flask import jsonify
import datetime


def getTimes():
    try:
        current_time = str(datetime.datetime.now())
        return jsonify(current_time), 200
    except:
        return jsonify("Bad request"), 400
