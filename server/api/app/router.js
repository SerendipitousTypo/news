module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const router = new Nodal.Router();

  /* Middleware */
  /* executed *before* Controller-specific middleware */

  const CORSMiddleware = Nodal.require('middleware/cors_middleware.js');
  // const CORSAuthorizationMiddleware = Nodal.require('middleware/cors_authorization_middleware.js');
  // const ForceWWWMiddleware = Nodal.require('middleware/force_www_middleware.js');
  // const ForceHTTPSMiddleware = Nodal.require('middleware/force_https_middleware.js');

  router.middleware.use(CORSMiddleware);
  // router.middleware.use(CORSAuthorizationMiddleware);
  // router.middleware.use(ForceWWWMiddleware);
  // router.middleware.use(ForceHTTPSMiddleware);

  /* Renderware */
  /* executed *after* Controller-specific renderware */

  const GzipRenderware = Nodal.require('renderware/gzip_renderware.js')

  router.renderware.use(GzipRenderware);

  /* Routes */

  const IndexController = Nodal.require('app/controllers/index_controller.js');

  /* generator: begin imports */

  const V1ArticlesController = Nodal.require('app/controllers/v1/articles_controller.js');
  const V1PublishersController = Nodal.require('app/controllers/v1/publishers_controller.js');
  const V1KeywordsController = Nodal.require('app/controllers/v1/keywords_controller.js');
  const V1ArtKeysController = Nodal.require('app/controllers/v1/art_keys_controller.js');
  // const ChannelsController = Nodal.require('app/controllers/channels_controller.js');
  const V1ChannelsController = Nodal.require('app/controllers/v1/channels_controller.js');

  /* generator: end imports */

  router.route('/').use(IndexController);

  /* generator: begin routes */

/**API endpoints for PostGreSQL tables*/
  router.route('/v1/articles/{id}').use(V1ArticlesController);
  router.route('/v1/publishers/{id}').use(V1PublishersController);
  router.route('/v1/keywords/{id}').use(V1KeywordsController);
  router.route('/v1/art_keys/{id}').use(V1ArtKeysController);
  // router.route('/channels/{id}').use(ChannelsController);
  router.route('/v1/channels/{id}').use(V1ChannelsController);

  /* generator: end routes */

  return router;

})();
