var siliconValley = require('../silicon-valley.json')

const appRouter = function (app) {

  app.get("/", function (req, res) {
    res.send(siliconValley);
  });

}

module.exports = appRouter;
