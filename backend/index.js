const express = require('express');
const path = require('path');
const app = express();

const frontendPath = path.join(__dirname, '../frontend/dist/frontend/browser');

app.use(express.static(frontendPath));


app.get(/.*/, (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
