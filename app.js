const express = require('express')
const app = express()
const cors = require('cors')

const convertModel = require('./models/convertModel')

app.use(cors({
	origin: '*',
}))


// *** Atividade 05 ***

//Questão 1
//Rota lista de alunos 
app.get('/alunos/todos', (req, res) => {
	let alunos = [
		{'Nome': 'Marcelo', 'Curso':'Sistemas de Informação'},
		{'Nome': 'Francisco', 'Curso': 'Sistemas de Informação'},
		{'Nome': 'Renata', 'Curso': 'Sistemas de Informação'}	
	]
	res.json(alunos)
})

//Questão 2
// Rota responsável por receber o valor a ser convertido
app.get('/moeda/:valor_real', convertModel.obterValor)

app.listen((process.env.PORT || 3000), function() {
	console.log('App rodando na porta 3000!')
})	