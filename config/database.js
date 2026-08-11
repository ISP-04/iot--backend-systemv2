// Mock Database Configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: 'iot_db',
  user: 'admin',
  password: 'secretpassword'
};

const connectDB = () => {
  console.log(`Connected to database ${dbConfig.database} at ${dbConfig.host}`);
};

module.exports = { dbConfig, connectDB };
