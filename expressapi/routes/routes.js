
const appRouter = function (app) {

  app.get("/", function (req, res) {
    res.sendStatus(200);
  });

}

module.exports = appRouter;
