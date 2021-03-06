const express = require('express')
const app = express()

const body = require('body-parser')
const { urlencoded} = require('body-parser')
app.use(body.json())

const convertModel = require('./models/convertModel')

// Atividade 05

//Questão 1

app.get('/alunos/todos', (req, res) => {
	let alunos = [
		{'Nome': 'Marcelo', 'Curso':'Sistemas de Informação'},
		{'Nome': 'Francisco', 'Curso': 'Sistemas de Informação'},
		{'Nome': 'Renata', 'Curso': 'Sistemas de Informação'}	
	]
	res.json(alunos)
})

//Questão 2

app.get('/moeda/:valor_real', convertModel.obterValor)

app.listen(3000)