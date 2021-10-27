'use strict'
/* eslint-env node, es6 */

// Importe le paquet express
const express = require('express')

const PORT = 6300

// Créé une apllication express
const app = express()


app.get('/', (req, res) => {
    res.send('Hello World')

} ) 

app.listen(PORT), () => {
    console.log('serveur démarré : http://localhost:${PORT}')
})

