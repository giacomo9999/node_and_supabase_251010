const express = require('express')
const cors = require('cors')
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config()


const app = express()
const PORT = 3000 || process.env.PORT
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.SUPABASE_API_KEY

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello From The Server!')
})

app.get('/events', async (req, res) => {
    const { data, error } = await supabase.from('events').select('*')
    if (error) {
        console.error(error)
        return res.status(500).json({ error: error.message })
    }
    res.json(data)
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})
