const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000; 

// Middleware
app.use(cors());
app.use(express.json());


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 