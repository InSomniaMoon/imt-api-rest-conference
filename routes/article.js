const express = require("express");
const router = express.Router();
const articleController = require('../controllers/article')
const auth = require('../middleware/auth')

router.get('/', articleController.getArticles)
router.get('/:id',articleController.getArticle)
router.delete('/:id', articleController.deleteArticle)
router.put('/:id', articleController.updateArticle)
router.post('/',articleController.addArticle)




module.exports = router