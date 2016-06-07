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
      let searchTerm = {q: this.params.query.q, size: 10000} //separates keyword search from other search parameters
      let article_ids = [];

      //function to get other search parameters
      let objToArray = (obj) => {
        let object = {};
        for (var key in obj) {
          if (key !== 'q') {
            object[key] = obj[key];
          }
        }
        return object;
      };

      //creating object of other search parameters
      let filter = objToArray(searchQuery);

      client.search(searchTerm)
      .then(response => {
        var idArray = response.hits.hits;

        idArray.forEach(item => {
          article_ids.push(item._source.id);
        });
        return article_ids;
      })
      .then(array => {
        //creating one queries object
        let queries = {id__in: array};
        for (var key in filter) {
          queries[key] = filter[key];
        }

        //query article database by keyword and other search parameters
        Article.query()
          .join('artTopics__topic')
          .join('publisher')
          .join('channel')
          .where(queries)
          .orderBy('date', 'DESC')
          .end((err, models) => {
            this.respond(err || models, ['title','date','url','content', {publisher: ['name', 'region']}, {artTopics: [{topic:['name']}]}, {channel: ['name']}]);
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
