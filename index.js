const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000 || process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello From The Server!')
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})

