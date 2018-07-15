var siliconValley = require('../silicon-valley.json')
var model = require('../model/model.js')

const appRouter = function (app) {

  app.get("/episodes", function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json(siliconValley._embedded);
  });

  app.get("/season/:num", function (req, res) {
    season = req.params.num
    res.send(model(season));
  });

}

module.exports = appRouter;
