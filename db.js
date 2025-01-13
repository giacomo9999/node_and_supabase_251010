const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
    connectionString: process.env.DATABASE_URL_TEST,
    ssl: { rejectUnathorized: false },
})

module.exports = pool
