// Dependencies
const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

// API Routes
router.use('/api', apiRoutes);

// Static Files (if no api routes are hit)
if (process.env.NODE_ENV === "production") {
    router.use(function(req, res){
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
}

// Export Router
module.exports = router;