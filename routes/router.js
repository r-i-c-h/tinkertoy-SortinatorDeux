const express = require('express');
const router = express.Router();
const path = require('path');

const publicDir = path.join(__dirname, '..', '/public');
const viewsDir = path.join(__dirname, '..', '/views');
router.use(express.static(publicDir));
// router.use(express.static(viewsDir));

router.get('/', (req,res) => {
  res.sendFile(path.join(viewsDir,'index.html'));
});

const sortAndReturn = require('./sorter');
router.post('/', (req,res) => {
  if (req.body.str) {
    const str = req.body.str;
    res.write(sortAndReturn(str));
  } else {
    res.status(400).end();
  }
});

module.exports = router;