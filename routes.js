const express = require('express');
router = express.router();

router.get('/',function(req,res){
    res.send('index');
});

router.get('/api',function(req,res){
    res.send('list');
});