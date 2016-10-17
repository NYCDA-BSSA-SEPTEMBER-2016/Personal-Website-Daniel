const express = require('express')
const app = express()

console.log('Starting app')

app.use(express.static('static'))

// app.get('/', (request,respond) => {
// 	console.log('Someone opened the main page')
// 	respond.send('I work')
// })

// app.get('/home', (request,respond) => {
// 	respond.sendFile(__dirname +'/static/index.html')
// })

app.listen(3000, () => {
	console.log('Express listening')
})