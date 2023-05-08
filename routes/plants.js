import * as dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const plants = express.Router()
console.log('plants route');
// Maak een route voor de index
plants.get('/plants', (request, response) => {
    console.log(2, request);
    response.render('plants')
})

export default plants