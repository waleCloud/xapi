import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../index';

chai.use(chaiHttp);

describe('Test Hello endpoint', () => {
  it('should return success:true', (done) => {
    chai.request(app)
      .get('/api/hello')
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});

describe('Test Unknown endpoints', () => {
  it('should return 404 for any unknown routes', (done) => {
    chai.request(app)
      .get('/api/thisisAndela')
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.statusCode).to.equal(404);        
        done();
      });
  });
});
