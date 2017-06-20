var app = require('../../server.js');
var request = require('supertest')(app);
var Note = require('../models/note.js');

describe('Note Routes', function(done) {
  it('should check the GET route', function(done) {
    request
      .get('/notes')
      .set('Content-Type', 'application/json')
      .end(function(err, res) {
       if(err) {
         return err;
       }
       expect(res.body).toBeDefined();
       done();
      })
  })
})