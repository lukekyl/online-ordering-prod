const supertest = require('supertest');
const server = require('../index.js');
const request = supertest(server)
const fake = require('faker');


describe('User Endpoints', () => {
  server.get("/user", async (req, res) => {
    res.json({ message: "pass!" });
  });

  it("gets the user endpoint", async done => {
    const response = await request.get("/user");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("pass!");
    done();
  });

  // it('should create a new user', async () => {
  //   const res = await request(server)
  //     .post('/user')
  //     .send({
  //       name: fake.name.firstName(),
  //       username: fake.internet.userName(),
  //       email: fake.internet.email(),
  //       createdAt: new Date(),
  //       updatedAt: new Date()
  //     })
  //   expect(res.statusCode).toEqual(200)
  //   expect(res.body).toHaveProperty('user')
  // });
})