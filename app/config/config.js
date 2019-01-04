import { } from  'dotenv/config';

module.exports = 
{
   development : {
     username : process.env.DEV_DBUSER,
     password : process.env.DEV_DBPASSWORD,
     database : process.env.DEV_DBNAME,
     host : process.env.DEV_DBHOST,
     dialect : process.env.DIALECT,
  },
   test : {
    username : process.env.TEST_DBUSER,
    password : process.env.TEST_DBPASSWORD,
    database : process.env.TEST_DBNAME,
    host : process.env.TEST_DBHOST,
    dialect : process.env.DIALECT,
  },
   production : {
    username : process.env.PROD_DBUSER,
    password : process.env.PROD_DBPASSWORD,
    database : process.env.PROD_DBNAME,
    host : process.env.PROD_DBHOST,
    dialect : process.env.DIALECT,
  },
};
