const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
        if (req.session.logged_in) {
            console.log(req.session.user_id)
            const postData = await Comment.create({
                comment_text: req.body.comment,
                post_id: req.body.postId,
                user_id: req.session.user_id
            })
            res.status(200).json(postData);
        } else {
            res.render('login');
        }
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;