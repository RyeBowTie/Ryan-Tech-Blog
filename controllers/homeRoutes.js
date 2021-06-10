const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
  try{ 
    if (!req.session.logged_in) {
      res.render('login');
    } else if (req.session.logged_in) {
      res.render('home', {logged_in:req.session.logged_in})
    }
  } catch (err) {
    console.log('something')
  }
  });
  

module.exports = router;