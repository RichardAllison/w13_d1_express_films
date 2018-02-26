const express = require('express');
const router  = new express.Router();

router.use('/films', require('./films'));

// home route
router.get('/', function(req, res) {
  
});

module.exports = router;
