const { Pool } = require('pg')
require('dotenv').config()

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 1

const pool = new Pool({
    connectionString: process.env.DATABASE_URL_TEST,
    ssl: { rejectUnathorized: false },
})

module.exports = pool
