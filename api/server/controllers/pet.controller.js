const {ROUTE_NAME} = require("../utils/constants")
const Pet = require(`../models/${ROUTE_NAME}.model`);
const handlerError = (res) => (err) => {
  res.status(400);
  res.json({ message: `Something went wrong with${ROUTE_NAME}` , data: err });
};
const create = (req, res) => {
  Pet.create(req.body)
    .then((newPet) => res.json({ author: newPet }))
    .catch(handlerError(res));
};
const findAll = (req, res) => {
  Pet.find()
    .then((ListOfPets) => res.json({ author: ListOfPets }))
    .catch(handlerError(res));
};
const findOne = (req, res) => {
  const { id } = req.params;
  Pet.findById(id)
    .then((onePet) => res.json({ author: onePet }))
    .catch(handlerError(res));
};
const deleteOne = (req, res) => {
  const { id } = req.params;
  Pet.findByIdAndDelete(id)
  .then(deleteConfirmation => res.json(deleteConfirmation))
  .catch(handlerError(res))
}
//es necessary change depending on model
const update = (req, res) => {
  const { id } = req.params;
  //it depends of the model important change!
  const { title} = req.body;
  Pet.findOneAndUpdate({_id:id}, { title }, { new: true })
    .then((onePet) => res.json({ author: onePet }))
    .catch(handlerError(res));
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
  deleteOne,
};
