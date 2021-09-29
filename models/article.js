const fs = require('fs');
const path = require('path');

class ArticleModel {

  constructor() {
    this.articles = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../ressources/', 'articles.json')));
  }

  save() {
    fs.writeFile('./ressources/articles.json', JSON.stringify(this.articles), err => {
      if (err) {
        console.log('Error writing file', err)
      } else {
        console.log('Successfully wrote file')
      }
    });
  }


}

module.exports = new ArticleModel();