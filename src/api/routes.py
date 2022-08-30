"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager,create_access_token,jwt_required,get_jwt_identity
import datetime
api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

#Ruta de registro de nuevos usuarios
@api.route('/register', methods =['POST'])
def login():
    body = request.get_json()
    #Comprobamos que sea un nuevo usuario, el email debe ser unico
    print(body['email'])
    usuario = User.query.filter_by(email =body['email']).first()
    if(usuario):
        return (jsonify({'error': "Usuario ya existe"}))
    else:
        nuevo_usuario = User(email =body['email'], password = body['password'], is_active = True)
        db.session.add(nuevo_usuario)
        db.session.commit()
    return jsonify(body), 201

@api.route('/login', methods = ['POST'])
def privado():
    body =request.get_json()
    usuario = User.query.filter_by(email =body['email'],password =body['password']).first()
    if usuario:
        token = create_access_token(identity = body['email'])
        return jsonify({'access_token': token, 'mensaje': 'inicio de sesion correcto'})
    else: 
        return jsonify({'error': ' Usuario incorrecto'})

@api.route('/privado', methods =['GET'])
@jwt_required()
def privado():
    return 'ESTAMOS DENTRO'
