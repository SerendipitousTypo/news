module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const ArtTopic = Nodal.require('app/models/art_topic.js');

  class V1ArtTopicsController extends Nodal.Controller {

    index() {

      ArtTopic.query()
        .join('article')
        .join('topic')
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models, [{article: ['title', 'date', 'url', 'content']}, {topic:['name']}]);

        });

    }

    show() {

      ArtTopic.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      ArtTopic.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      ArtTopic.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      ArtTopic.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1ArtTopicsController;

})();
