const express = require("express");
const router = express.Router();
const articleController = require('../controllers/article')

router.get('/', articleController.getArticles)
router.get('/:id',articleController.getArticle)
router.delete('/:id', articleController.deleteArticle)
router.put('/:id', articleController.updateArticle)

module.exports = router