const express = require('express')
const QuestionController = require('./controllers/question-controller')
const RoomController = require('./controllers/room-controller')
const route = express.Router()

//Rotas relacionadas a enter-room e a create-pass
route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

//Rotas relacionadas a sala
route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

//Rotas relacionadas as questões
route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)

module.exports = route