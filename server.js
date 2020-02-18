const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API IS RUNNING ON PORT 5000'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Is Listening On Port ${PORT}....`));
