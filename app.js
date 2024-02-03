let accounts = require('./accounts');
const express = require('express');
const app = express();
const accountsRoutes = require('./api/accounts/accounts.routes');
const connectDb = require('./database');


app.use(express.json());
app.use("/api", accountsRoutes);


connectDb();
const PORT =8000;
app.listen(PORT, () => {
  console.log('The application is running on localhost:8000');
});
