module.exports = (function() {

  'use strict';
  const watson = require('watson-developer-cloud');
  const extractor = require('unfluff');
  const rp = require('request-promise');
  const Nodal = require('nodal');
  const ToneAnalyzer = Nodal.require('app/models/tone_analyzer.js');
  const configFile = require('../../../config/config.js'); //TODO:copy over config file
  const tone_analyzer = watson.tone_analyzer({
    username: configFile.WATSON_USERNAME,
    password: configFile.WATSON_PASSWORD,
    version: 'v3',
    version_date: '2016-05-19'
  });

  class V1ToneAnalyzersController extends Nodal.Controller {

    index() {
      let text = this.params.query.text;
      let that = this;
      tone_analyzer.tone({ text: text}, function(err, tone) {
        if (err) {
          that.respond(err);
        } else {
          that.respond(tone.document_tone);
        }
      });
    }

    show() {

      ToneAnalyzer.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      ToneAnalyzer.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      ToneAnalyzer.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      ToneAnalyzer.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1ToneAnalyzersController;

})();
