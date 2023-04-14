//@desc GET all contacts
//@Route GET api/contacts
//@access public
const getContact = (req, res) => {
  res.status(200).json({ message: "get all contacts" });
};

//@desc POST contacts
//@Route POST api/contacts
//@access public
const postContact = (req, res) => {
  console.log("this is the body", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all fields are madotory");
  }
  res.status(200).json({ message: "create new contact" });
};

//@desc GET one contact
//@Route GET api/contacts/1
//@access public
const getOneContact = (req, res) => {
  res.status(200).json({ message: `get contact ${req.params.id}` });
};

//@desc PUT one contact
//@Route PUT api/contacts/1
//@access public
const updateContact = (req, res) => {
  res.status(200).json({ message: `updatet contact ${req.params.id}` });
};

//@desc GET one contact
//@Route GET api/contacts/1
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `delete contact ${req.params.id}` });
};

module.exports = {
  getContact,
  postContact,
  getOneContact,
  updateContact,
  deleteContact,
};
