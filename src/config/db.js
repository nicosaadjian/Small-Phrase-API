const pgp = require('pg-promise')(/*options*/)

const cn = {
    host: 'database-2.cngkigmm2sd1.us-east-2.rds.amazonaws.com',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'admin1234',
    ssl: { rejectUnauthorized: false } // RDS suele pedir SSL
};

// const db = pgp('postgres://username:password@host:port/database')
const db = pgp(cn);

module.exports = db;