// Project Imports
import express from 'express';

// Initialize
const routes = express.Router();

/**
 * Invoke a transaction to inactivate an process
 */
routes.get('/test', (req, res) => {
  res.json({ message: 'OI' });
});

// Module Export
export default routes;
