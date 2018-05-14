const express = require('express');
const router = express.Router();
const mongo = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dashboard'});
});

router.get('/new-task', (req, res, next) =>{
  res.render('new_task', { title: 'New Task'});
});


router.post('/new-task', (req, res) => {
  let task = {
    title: req.body.taskTitle,
    description: req.body.description,
    status: req.body.statusType,
    owner_name: req.body.ownerName,
    priority: req.body.priorityType,
    est_time: req.body.estTime,
    time_spend: req.body.timeSpend
  }

  mongo.connect(url, (err, db) => {
    if (err) throw err;
    let dbo = db.db('test');
    dbo.collection('task').insertOne(task, (err, res) => {
      if (err) throw err;
      db.close()
    })
  })

  
  res.redirect('task_report', {title: 'New Task'});
});

router.get('/task-report', (req, res) =>{
  let data;
  mongo.connect(url, (err, db) => {
    if (err) throw err;
    let dbo = db.db('test')

    dbo.collection('task').find({}).toArray( (err, results) => {
      if (err) throw err;
      data = results;
      db.close();
      
      res.render('task_report', { title: 'Task Report', data:JSON.stringify(data)});
    })

  })
  

});

module.exports = router;
