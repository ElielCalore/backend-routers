const router = require("express").Router();
const data = require("../data");
const dataUser = [];
const dataAddress = [];
const newData = [];

//const { v4: uuid } = require("uuid");

router.post("/create-userAndAddress/:idU/:idA", (req, res) => {
  const { idU, idA } = req.params;

  const newDocumentUser = data.filter(
    (currentDocument) => currentDocument.id === idU
  );
  const newDocumentAddress = data.filter(
    (currentDocument) => currentDocument.id === idA
  );
  console.log(newDocumentUser[0].nome);
  newData[0] = {
    nome: newDocumentUser[0].nome,
    email: newDocumentAddress[0].email,
  };

  return res
    .status(201)
    .json({ message: "Criado com sucesso!", UserAndAddress: newData });
});

module.exports = router;
