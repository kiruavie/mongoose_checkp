import Person from "../src/models/Person";

export async function index(req, res) {
  const get = await Person.find(req.body);
  res.send(get);
}

export async function create(req, res) {
  const post = await Person.create(req.body);
  res.send(post);
}

export async function indexBook(req, res) {
  const book = await Person.find(req.body);
  res.send(book);
}
