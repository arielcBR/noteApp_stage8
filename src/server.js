require('express-async-error');
const AppError = require('./utils/AppError');
const express = require('express');
const migrationsRun = require('./database/sqlite/migrations');

const app = express();
const PORT = 3000;

migrationsRun();
const routes = require('./routes/index');

app.use(express.json());
app.use(routes);
app.use((error, req, res, next) => {
   let num;
   if (error instanceof AppError) {
      return res.status(error.statusCode).json({
         status: 'Error',
         message: error.message
      })
   }

   return res.status(500).json({
      status: 'Error',
      message: 'Internal Server Error'
   });
});


app.listen(PORT, () => {
   console.log(`Server in running on port ${PORT}!`); 
});