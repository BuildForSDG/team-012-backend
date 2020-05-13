import request from 'supertest';
import { should } from 'chai';
import app from '../src/app';

should();

describe('App setup', () => {
  it('should return app as a function', () => {
    app.should.be.a('function');
  });

  it('should return success on home route request', async () => {
    const response = await request(app).get('/');

    response.status.should.equal(200);
    response.body.status.should.eql('success');
    response
      .body
      .message
      .should
      .eql('welcome to "BuildForSDG 2020"');
  });

  it('should return error if an invalid route is requested', async () => {
    const response = await request(app).get('/invalid');

    response.status.should.equal(404);
    response.body.status.should.eql('error');
    response.body.error.should.eql('resource not found');
  });
});
