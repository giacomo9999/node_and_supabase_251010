const express = require('express')
const cors = require('cors')
const pool = require('./db')

const app = express()
const PORT = 3000 || process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello From The Server!')
})

app.get('/events', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM events')
        res.status(200).json(result.rows)
    } catch (e) {
        console.error(e)
        res.status(500).json({ error: 'Database Error' })
    }
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})
