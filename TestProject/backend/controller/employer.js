const connection = require('../database/connection');

exports.getEmployers = (req, res) => {
    connection.query('SELECT * FROM employee', (error, results) => {
        if (error) {
            console.error('Error querying employers:', error);
            res.status(500).json({ message: 'Internal server error' });
            return;
        }
        res.json(results);
    });
};

// Close the connection when the application is terminated
process.on('SIGINT', () => {
    connection.end();
    process.exit();
  });
