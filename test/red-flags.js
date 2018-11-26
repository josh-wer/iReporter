let assert = require('assert');

let Incidents = require('../controllers/Incidents');

let http_mocks = require('node-mocks-http');

let should = require('should');

describe('red-flag', function () {
  describe('get all red flags', function () {

    let response = http_mocks.createResponse({eventEmitter: require('events').EventEmitter});
    let request = http_mocks.createRequest({
      method: 'GET',
      url: '/api/v1/red-flags',
    });



    response.on('end', function () {

      let responseData = response._getData();

      it('should be an object', function () {
        responseData.should.be.Object();
        // done()
      });

      it('should have an integer value as status', function () {
        responseData.status.should.be.Number();
      });

      it('should have array called data', function () {
        responseData.data.should.be.Array();
      });

      it('data should have objects as its elements', function () {
        if (responseData.data.length > 0)
          responseData.data[0].should.be.Object();
      });


    });


  Incidents.index(request, response);
  });


  describe('create a red flags', function () {

    let response = http_mocks.createResponse({eventEmitter: require('events').EventEmitter});
    let request = http_mocks.createRequest({
      method: 'POST',
      url: '/api/v1/red-flags',
    });



    response.on('end', function () {

      let responseData = response._getData();

      it('should be an object', function () {
        responseData.should.be.Object();
        // done()
      });

      it('should have an integer value as status', function () {
        responseData.status.should.be.Number();
      });

      it('should have array called data', function () {
        responseData.data.should.be.Array();
      });

      it('data should have an object as its element', function () {
        responseData.data[0].should.be.Object();
      });

      it('data should have an object with an integer id index', function () {
        responseData.data[0].id.should.be.Number();
      });

      it('data should have an object with a message index that says', function () {
        responseData.data[0].message.should.equal('Created red-flag record');
      });


    });


    Incidents.store(request, response);
  });
});
