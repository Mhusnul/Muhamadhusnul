const express = require('express');
const app = express();
const path = require('path');

// Middleware untuk file statis
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS sebagai template engine
app.set('view engine', 'ejs');

// Route ke halaman utama
app.get('/', (req, res) => {
  res.render('index');
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
