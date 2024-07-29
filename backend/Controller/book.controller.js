import BookModel from "../model/book.model.js";

export const getBook = async (req, res) => {
  try {
    const book = await BookModel.find();
    res.status(200).send(book);
  } catch (error) {
    console.log("error :-", error);
    res.status(500).send({ msg: error.message });
  }
};
