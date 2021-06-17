// Set up the MYSQL database configuration here
const MYSQL_HOST = process.env.MYSQL_HOST || 'localhost'
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'boilerplate'
const MYSQL_USER = process.env.MYSQL_USERNAME || 'superuser'
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || 'database'

// We are going to export this..

const MYSQL = {
  host: MYSQL_HOST,
  database: MYSQL_DATABASE,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD
}

export default MYSQL