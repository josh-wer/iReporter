const assert = require('assert');

const Incidents = require('../controllers/Incidents');

const http_mocks = require('node-mocks-http');

const should = require('should');

const events = require('events');

describe('red-flag', function () {


  describe('Get all red-flag records', function () {

    let response = http_mocks.createResponse({eventEmitter: events.EventEmitter});
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

      it('should have an integer status property', function () {
        responseData.status.should.be.Number();
      });

      it('should have an array data property', function () {
        responseData.data.should.be.Array();
      });

      it('should have a data property with objects as its elements', function () {
        if (responseData.data.length > 0)
          responseData.data[0].should.be.Object();
      });


    });

    Incidents.index(request, response);
  });



  describe('Get a specific red-flag-record', function () {

    let response = http_mocks.createResponse({eventEmitter: events.EventEmitter});
    let request = http_mocks.createRequest({
      method: 'GET',
      url: '/api/v1/red-flags/:id(\\d+)',
      params: {id: 2}
    });


    response.on('end', function () {

      let responseData = response._getData();

      it('should be an object', function () {
        responseData.should.be.Object();
      });

      it('should have an integer status property', function () {
        responseData.status.should.be.Number();
      });

      it('should have an array data property', function () {
        responseData.data.should.be.Array();
      });

      it('data property should contain only one object or none', function () {
        if (responseData.data.length === 1) responseData.data[0].should.be.Object();
      });

    });


    Incidents.find(request, response);
  });


  describe('Create a red-flag record', function () {

    let response = http_mocks.createResponse({eventEmitter: events.EventEmitter});
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
