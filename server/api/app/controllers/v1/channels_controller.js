/**
* This is the api controller for the channels table.
* It manages the creation and maintenance of all channels  
* all methods are default in v0.0.1
*/

module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Channel = Nodal.require('app/models/channel.js');

  class V1ChannelsController extends Nodal.Controller {

    index() {

      Channel.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      Channel.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      Channel.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      Channel.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      Channel.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1ChannelsController;

})();
