import express from 'express'
import livroscontroller from './app/controllers/Livroscontroller.js';
import cors from 'cors'

const app = express()

app.use(cors(
  {
      origin: ['http://localhost:5173'],
      credentials: true
  }
));

app.use(express.json())

app.get('/livros', livroscontroller.index)
app.get('/livros/:id', livroscontroller.show)
app.post('/livros', livroscontroller.store)
app.delete('/livros/:id', livroscontroller.uptade )
app.put('/livros/:id',livroscontroller.delete)

export default app