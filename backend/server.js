//for form

// server.js
// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');



// const formRoutes = require('./routes/formRoute');

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use('/api', formRoutes);

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB Connected'))
//   .catch((error) => console.error('MongoDB connection error:', error));

// app.listen(4000, () => console.log('Server running on port 4000'));

//for search page
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const searchRoute = require('./routes/searchRoute');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use('/api/search', searchRoute);

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

