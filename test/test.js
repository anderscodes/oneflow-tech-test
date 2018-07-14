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
