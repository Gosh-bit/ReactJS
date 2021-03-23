const express = require('express');
const app = express();

const routes = require('./routes');
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.use('/api', routes);
