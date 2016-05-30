/**
* This is the api controller for the aricles table.
* It manages the creation and retrival of all articles 
*/

module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Article = Nodal.require('app/models/article.js');

  class V1ArticlesController extends Nodal.Controller {


/**
* Queries the articles table
* returns an article, with it's publisher region and channel name as JSON
*/
    index() {

      Article.query()
        .join('publisher')
        .join('channel')
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models, ['title','date','url','content', {publisher: ['name', 'region']},{channel:'name'}]);

        });

    }

    show() {

      Article.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      Article.create(this.params.body, (err, model) => {

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
