const {ROUTE_NAME} = require("../utils/constants")
const Author = require(`../models/${ROUTE_NAME}.model`);
const handlerError = (res) => (err) => {
  res.status(400);
  res.json({ message: `Something went wrong with${ROUTE_NAME}` , data: err });
};
const create = (req, res) => {
  Author.create(req.body)
    .then((newAuthor) => res.json({ author: newAuthor }))
    .catch(handlerError(res));
};
const findAll = (req, res) => {
  Author.find()
    .then((ListOfAuthors) => res.json({ author: ListOfAuthors }))
    .catch(handlerError(res));
};
const findOne = (req, res) => {
  const { id } = req.params;
  Author.findById(id)
    .then((oneAuthor) => res.json({ author: oneAuthor }))
    .catch(handlerError(res));
};
const deleteOne = (req, res) => {
  const { id } = req.params;
  Author.findByIdAndDelete(id)
  .then(deleteConfirmation => res.json(deleteConfirmation))
  .catch(handlerError(res))
}
//es necessary change depending on model
const update = (req, res) => {
  const { id } = req.params;
  //it depends of the model important change!
  const { title} = req.body;
  Author.findOneAndUpdate({_id:id}, { title }, { new: true })
    .then((oneAuthor) => res.json({ author: oneAuthor }))
    .catch(handlerError(res));
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
  deleteOne,
};
