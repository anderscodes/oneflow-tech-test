var siliconValley = require('../silicon-valley.json')
var model = require('../model/model.js')

const appRouter = function (app) {

  app.get("/", function (req, res) {
    res.send(siliconValley);
  });

  app.get("/season/:num", function (req, res) {
    season = req.params.num
    res.send(model(season));
  });

}

module.exports = appRouter;
