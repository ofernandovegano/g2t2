import app from './app';
import express from 'express';

app.use(express.json())
const port = process.env.PORT || 5000
app.listen(port, error => {
  if (error) throw error;
  console.log('server running on port ' + port);
});