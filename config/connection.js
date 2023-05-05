require('dotenv').config();

const Sequelize = require('sequelize');
//mysql://eyyo7kgh2kslv7rf:bx4vwiisif7yfcjo@kutnpvrhom7lki7u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/a4hppuw85bc1dzzw
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      define: {
        underscored: true,
      },
      underscoredAll: true,
      dialectOptions: {
        decimalNumbers: true,
      },
    
    });

module.exports = sequelize;
