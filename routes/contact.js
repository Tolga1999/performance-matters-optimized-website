import * as dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const contact = express.Router()
contact.get('/contact', (request, response) => {
    response.render('contact')
})

export default contact
