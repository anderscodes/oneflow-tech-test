var chai = require('chai');
var request = require('supertest');
var expect = chai.expect;
var siliconValley = require('../expressapi/silicon-valley.json')




describe('loading express', function () {
  var server;

  beforeEach(function () {
    delete require.cache[require.resolve('../expressapi/server')];
    server = require('../expressapi/server');
  });

  afterEach(function (done) {
    server.close(done);
  });

  describe('testing index', function () {

    it('responds to / and returns the data', function testSlash(done) {
    request(server)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        expect(res.body).to.eql(siliconValley);
        done(err);
      });
    });

    it('404 everything else', function testPath(done) {
      request(server)
        .get('/foo/bar')
        .expect(404, done);
    });

  });

  describe('season query string', function () {

    let season2Episode1 = {"id":117409,"url":"http://www.tvmaze.com/episodes/117409/silicon-valley-2x01-sand-hill-shuffle","name":"Sand Hill Shuffle","season":2,"number":1,"airdate":"2015-04-12","airtime":"22:00","airstamp":"2015-04-13T02:00:00+00:00","runtime":30,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/49/123616.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/49/123616.jpg"},"summary":"<p>Season 2 begins with the Pied Piper guys being wined and dined by every venture capitalist under the sun, while Monica adjusts to a new managing partner at Raviga as the company faces major changes.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/117409"}}}

    it('responds to /season/:num and returns episodes', function (done) {
      request(server)
        .get('/season/2')
        .expect(200)
        .end(function(err, res) {
          expect(res.body[8]).to.eql(season2Episode1);
          done(err);
      });
    })
  })

});
