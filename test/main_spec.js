let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../src/main.js')
import {expect} from 'chai'
chai.use(chaiHttp)

describe('server', () => {
  before( () => {
    server.listen();
  })

  after( () => {
    server.close();
  })

  describe('/', () => {
    it('should return 200', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          console.log(res);
          expect(res.status).to.equal(200);
          expect(res.text).to.equal('Node.js Server is running');
          server.close();
          done();
        })
    })
  })
})
