const fetch = require('node-fetch')


function obterValor(req, res) {
	let url = 'https://economia.awesomeapi.com.br/json//BRL-USD' 
	// +  req.params.valor_real
	fetch(url)	
	
	.then((data) => {
		var file = data.json()
		return file
	})
	.then((rows) => {
		var extravelue = rows[0]
		res.json("Em dolares: " + extravelue['high']*req.params.valor_real)
	})

}

module.exports = {obterValor}