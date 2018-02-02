const express = require('express');
const router = express.Router();
const path = require('path');
const sortAndReturn = require('./sorter');

const publicPath = express.static(path.join(__dirname, '..', 'public'));
const pagesPath = express.static(path.join(__dirname, '..', 'views'));

// console.log(path.join(__dirname,'..','public'));
router.use(publicPath);
router.use(pagesPath);

router.get('/', (req,res) => {
  res.sendFile(path.join(pagesPath,'index.html'));
});

router.post('/', (req,res) => {
  if (req.body.str) {
    const str = req.body.str;
    sortAndReturn(str)
    .then(rsp => { res.json(rsp); })
    .catch( err => { console.error(err); });
  } else {
    res.status(400).end();
  }
});

module.exports = router;