const express = require('express')
const app = express()
const cors = require('cors')

const convertModel = require('./models/convertModel')

app.use(cors({
	origin: '*',
}))


// *** Atividade 05 ***

//Quest 1
//Rota lista de alunos 
app.get('/alunos/todos', (req, res) => {
	let alunos = [
		{'Nome': 'Marcelo', 'Curso':'Sistemas de Informacao'},
		{'Nome': 'Francisco', 'Curso': 'Sistemas de Informacao'},
		{'Nome': 'Renata', 'Curso': 'Sistemas de Informacao'}	
	]
	res.json(alunos)
})

//Quest 2
// Rota valor a ser convertido
app.get('/moeda/:valor_real', convertModel.obterValor)

app.listen(process.env.PORT || 3000)