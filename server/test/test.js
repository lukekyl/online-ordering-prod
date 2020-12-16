const request = require('supertest');
const app = require('../index.js');
const fake = require('faker');


describe('User Endpoints', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/user')
      .send({
        name: fake.name.firstName(),
        username: fake.internet.userName(),
        email: fake.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('post')
  })
})