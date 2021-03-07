const fetch = require('node-fetch')

function obterValor(req, res) {
	let url = 'https://economia.awesomeapi.com.br/json/BRL-USD' 	
	fetch(url)		
	.then((data) => {
		var file = data.json()
		return file
	})
	.then((rows) => {
		var extravelue = rows[0]
		res.json("Valor em dolares: " + extravelue['high']*req.params.valor_real)
	})
}
module.exports = {obterValor}