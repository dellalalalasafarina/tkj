// Import express
const express = require('express');
const app = express();

// Set port dan host
const port = 3306; // Port yang digunakan
const host = '10.20.60.40'; // Ganti dengan IP lokal komputer kamu

// Routing
app.get('/', (req, res) => {
  res.send('Server berjalan dengan baik!');
});

// Menjalankan server
app.listen(port, host, () => {
  console.log(Server berjalan di http://${host}:${port});
});