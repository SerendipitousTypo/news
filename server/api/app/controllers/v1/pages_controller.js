module.exports = (function() {

  'use strict';
  const extractor = require('unfluff');
  const rp = require('request-promise');
  const Nodal = require('nodal');
  const Page = Nodal.require('app/models/page.js');

  class V1PagesController extends Nodal.Controller {

    index() {
      let url = this.params.query.url;
      
      if(url) {
        rp(url)
        .then(data => {
          let page = extractor(data);
          let textArray = page.text.split('(File photo)')
          page.text = textArray[1] || page.text;
          page.text.replace(/\n/g, "<br />");
          this.respond(page);
        })
        .catch(err => {
          this.respond(err);
        });
      }



      //removes boilerplate nodal code.
      // Page.query()
      //   .where(this.params.query)
      //   .end((err, models) => {

      //     this.respond(err || models);

      //   });

    }

    show() {

      Page.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      Page.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      Page.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      Page.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1PagesController;

})();
