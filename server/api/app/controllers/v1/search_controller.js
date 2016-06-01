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

  class V1SearchController extends Nodal.Controller {


/**
* Queries the articles table
* returns an article, with it's publisher region and channel name as JSON
*/
    index() {

      let searchQuery = this.params.query; //{q:'query string'};
      let article_ids = [];
      let results = [];

      client.search(searchQuery)
      .then(response => {
        var idArray = response.hits.hits;

        idArray.forEach(item => {
          article_ids.push(item._source.id);
        });
        return article_ids;
      })
      .then(array => {
          Article.query()
            .join('publisher')
            .join('channel')
            .where({id: array[0]})
            .end((err, models) => {
              this.respond(err || models, ['title','date','url','content', {publisher: ['name', 'region']},{channel:'name'}]);
            })
          });
      }

    show() {}

    create() {}

    update() {}

    destroy() {}

  }

  return V1SearchController;

})();
