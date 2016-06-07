/**
* This is the api controller for the aricles table.
* It manages the creation and retrival of all articles 
*/

module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Article = Nodal.require('app/models/article.js');
  const Publisher = Nodal.require('app/models/publisher.js');

  class V1SearchController extends Nodal.Controller {


/**
* Queries the articles table
* returns an article, with it's publisher region and channel name as JSON
*/
    index() {
      let publishers = [];
      let artIDs = [];

      Publisher.query()
        .end((err, models) => {
          var pubCount = models.length;
          for(var i = 0; i < pubCount; i ++) {
            var pubName = models[i]._data.name;
            // console.log(pubName);
            Article.query()
              .where({publisher_id: i + 1})
              .orderBy('date', 'DESC')
              .limit(10)
              .end((err, PubArts) => {
                let artCount = PubArts.length;
                for(var j = 0; j < artCount; j++) {
                  artIDs.push(PubArts[j]._data.id);
                  if(j === artCount -1) {
                    // console.log('in here?');
                    Article.query()
                      .join('artTopics__topic')
                      .join('publisher')
                      .join('channel')
                      .where({id__in: artIDs})
                      .orderBy('date', 'DESC')
                      .end((err, Arts) => {
                        // console.log(Arts);
                        this.respond(err || Arts, ['title','date','url','content', {publisher: ['name', 'region']}, {artTopics: [{topic:['name']}]}, {channel: ['name']}]);
                      })
                  }
                }
              })
          }
        })
        //query article database by keyword and other search parameters
    };

    show() {}

    create() {}

    update() {}

    destroy() {}

  }

  return V1SearchController;

})();
