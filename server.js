const express = require('express');
const connectDB = require('./config/db');

const app = express();

// CONNECT TO THE DATABASE
connectDB();

// MIDDLEWARE FOR BODY PARSER
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API IS RUNNING ON PORT 5000'));

// DEFINE ROUTES
app.use('/api/users', require('./routes/user'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Is Listening On Port ${PORT}....`));
