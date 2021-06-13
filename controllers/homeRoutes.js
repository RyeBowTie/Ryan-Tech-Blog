const router = require('express').Router();
const { User, Post, Comment } = require('../models');


router.get('/', async (req, res) => {
  try {
    if (req.session.logged_in) {
      const postData = await Post.findAll({
        include: {
          model: User,
          as: 'user'
        },
        order:[['updatedAt',  'DESC']]
      });
      const posts = postData.map((post) => post.get({ plain: true }));
      res.render('home', { posts, logged_in: req.session.logged_in });
    } else {
      res.render('login');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try{ 
    if (!req.session.logged_in) {
      res.render('login');
    } else if (req.session.logged_in) {
      res.render('home', { logged_in:req.session.logged_in })
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/register', (req, res) => {
  try {
    res.render('register');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post', async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.render('post',  { logged_in:req.session.logged_in })
    } else {
      res.render('login');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
  
router.get('/post/:id', async (req, res) => {
  try {
    if (req.session.logged_in) {
      const postData = await Post.findOne({
        where: {
          id: req.params.id
        },
        include: {
          model: Comment,
          order: [['updatedAt',  'DESC']]
        }
      })
      const posts = postData.get({ plain: true});
      res.render('comment', {posts, logged_in:req.session.logged_in})
    } else {
      res.render('login');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', async (req, res) => {
  try {
    if (req.session.logged_in) {
      const postData = await Post.findAll({
        where: {
          user_id: req.session.user_id
        },
        include: {
          model: Comment,
          order: [['updatedAt',  'DESC']]
        }
      })
      const posts = postData.map((post) => post.get({ plain: true }));
      // res.json(posts)
      res.render('profile', { posts, logged_in: req.session.logged_in });
    }

  } catch (err) {
    res.status(500).json(err);
  }
})
module.exports = router;