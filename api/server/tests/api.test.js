const supertest = require("supertest");
const mongoose = require("mongoose");

const { ROUTE_NAME } = require("../utils/constants");
const { app, server } = require("../../server");
const api = supertest(app);
test("Items are returned as json", async () => {
  const response = await api.get(`/api/${ROUTE_NAME}`);
  expect(response.body).toHaveLength(2);
});
beforeEach(async () => {

})
afterAll(() => {
  server.close();
  mongoose.connection.close();
});
