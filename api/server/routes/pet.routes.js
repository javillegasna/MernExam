const {ROUTE_NAME} =require("../utils/constants")
const Controller = require(`../controllers/${ROUTE_NAME}.controller`);
module.exports = app => {
  app.post(`/api/${ROUTE_NAME}/`, Controller.create);
  app.get(`/api/${ROUTE_NAME}/`, Controller.findAll);
  app.delete(`/api/${ROUTE_NAME}/:id`, Controller.deleteOne);
  app.get(`/api/${ROUTE_NAME}/:id`, Controller.findOne);
  app.put(`/api/${ROUTE_NAME}/:id`, Controller.update);
};