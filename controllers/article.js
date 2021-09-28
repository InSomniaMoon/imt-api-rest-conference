let { articles } = require("../models/article")


exports.getArticles = (req,res) => {
    if(articles){
        res.status(200).json(articles)
    }else{
        res.status(400).json({err : "Pas d'articles trouvé."})
    }
}


exports.getArticle = (req,res) => {
    let {id} = req.params
    let article = articles.filter(a => a.id == id)
    if(article.length > 0){
        res.status(200).json(article)
    }else{
        res.status(400).json({err : "Pas d'article avec cet Id"})
    }
}

exports.deleteArticle = (req,res) => {
    let {id} = req.params
    let article = articles.filter(a => a.id == id)[0]
    if(article){
        let index = articles.indexOf(article)
        articles.splice(index,1)
        res.status(200).json(article)
    }else{
        res.status(400).json({err : "Pas d'article avec cet Id"})
    }
}


exports.updateArticle = (req,res) => {
    console.log(req.body)
    let {id} = req.params
    let article = articles.filter(a => a.id == id)[0]
    if(article){
        let updatedArticle = req.body
        let index = articles.indexOf(article)
        articles.splice(index,0,updatedArticle)
        res.status(200).json(article)
    }else{
        res.status(400).json({err : "Pas d'article avec cet Id"})
    }
    
}