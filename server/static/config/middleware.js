

module.exports  = (app, express) => {
  console.log(__dirname);
  app.use(express.static(__dirname + '/../../client'));

}