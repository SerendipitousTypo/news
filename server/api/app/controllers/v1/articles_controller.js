/**
* This is the api controller for the aricles table.
* It manages the creation and retrival of all articles
*/

module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Article = Nodal.require('app/models/article.js');
  const elasticSearch = require('elasticsearch');

  const client = new elasticSearch.Client({
    host: 'localhost:9200',
    log: 'trace'
  });

  class V1ArticlesController extends Nodal.Controller {


/**
* Queries the articles table
* returns an article, with it's publisher region and channel name as JSON
*/
    index() {

      Article.query()
        .join('artTopics__topic')
        .join('publisher')
        .join('channel')
        .where(this.params.query)
        .orderBy('date', 'DESC')
        .end((err, models) => {

          this.respond(err || models, ['id','title','date','url','content', {publisher: ['name', 'region']}, {artTopics: [{topic:['name']}]}, {channel:['name']}]);

        });

    }

    show() {

      Article.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {
      let article_title = this.params.body.title || '';
      let article_url = this.params.body.url || '';
      let article_content = this.params.body.content || '';
      let article_id;

      Article.create(this.params.body, (err, model) => {
        if(!err){
          article_id = model.get('id');
          // console.log('this is the article id', article_id);

          const esPost = {
            index: 'articles',
            type: 'article',
            body: {
              id: article_id,
              title: article_title,
              url: article_url,
              content: article_content
            }
          };

          client.create(esPost)
          .then(response => {
            // console.log('response ===========>', response);
          }, error => console.log('error ===========>', error))
          .catch(err => console.log('error ============>', err));
        }

        this.respond(err || model);


      });

    }

    update() {

      Article.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      Article.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1ArticlesController;

})();
