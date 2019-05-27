const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const routes = require('./api/routes');

const dotenv = require('dotenv');
dotenv.config();

routes(app);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
