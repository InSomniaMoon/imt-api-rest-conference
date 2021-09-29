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
    
    let index = articles.findIndex((a => a.id ==id))
    if(index){
        let updatedArticle = req.body
        updateArrayValue(articles,index,updatedArticle)
        res.status(200).json(articles[index])
    }else{
        res.status(400).json({err : "Pas d'article avec cet Id"})
    }    
}


function updateArrayValue(array,index,article){
    array[index].nom = article.nom
    array[index].description = article.description
    array[index].type = article.type
}


exports.addArticle = (req,res) => {
    
    let {nom,description,type} = req.body
    if(checkBodyValue(nom,description,type))
    {
        let id = Math.floor((1 + Math.random()) * 0x10000)
        let newArticle = {
            id : id,
            nom : nom,
            description : description,
            type : type
        }
        articles.push(newArticle)
        res.status(200).json(newArticle)
    }else{
        res.status(404).json({err : "Attribut manquant ! "})
    }
    }
  

    

    

function checkBodyValue(name,description,type){
    console.log(name,description,type)
    return name && description && type
}