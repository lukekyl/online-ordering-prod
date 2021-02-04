const supertest = require('supertest');
const server = require('../index.js');
const requestWithSupertest = supertest(server);


describe('User Endpoints', () => {

  
  // it("gets the user endpoint", async done => {
  //   const response = await request.get("/user");
  //   expect(response.status).toBe(200);
  //   expect(response.body.message).toBe("pass!");
  //   done();
  // });

  it('GET /user should show all users', async () => {
    const res = await requestWithSupertest.get('/users');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('users')
      console.log(res.body)
  });

  it('GET /user/:id should show a user', async () => {
        const res = await requestWithSupertest.get('/users/3')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('user')
        console.log(res.body)
    });

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
