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
  const V1ChannelsController = Nodal.require('app/controllers/v1/channels_controller.js');
  const V1SearchController = Nodal.require('app/controllers/v1/search_controller.js');
  const V1TopicsController = Nodal.require('app/controllers/v1/topics_controller.js');
  const V1ArtTopicsController = Nodal.require('app/controllers/v1/art_topics_controller.js');
  const V1PagesController = Nodal.require('app/controllers/v1/pages_controller.js');
  const V1FrontPageController = Nodal.require('app/controllers/v1/frontPage_controller.js');

  /* generator: end imports */

  router.route('/').use(IndexController);

  /* generator: begin routes */

/**API endpoints for PostGreSQL tables*/
  router.route('/v1/articles/{id}').use(V1ArticlesController);
  router.route('/v1/publishers/{id}').use(V1PublishersController);
  router.route('/v1/channels/{id}').use(V1ChannelsController);
  router.route('/v1/search').use(V1SearchController);
  router.route('/v1/topics/{id}').use(V1TopicsController);
  router.route('/v1/art_topics/{id}').use(V1ArtTopicsController);
  router.route('/v1/pages/{id}').use(V1PagesController);
  router.route('/v1/frontPage').use(V1FrontPageController);

  /* generator: end routes */

  return router;

})();
