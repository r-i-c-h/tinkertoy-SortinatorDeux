const express = require('express');
const router = express.Router();
const path = require('path');

const publicPath = express.static(path.join(__dirname, '..', 'public'));
const pagesPath = express.static(path.join(__dirname, '..', 'views'));

// console.log(path.join(__dirname,'..','public'));
router.use(publicPath);
router.use(pagesPath);

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