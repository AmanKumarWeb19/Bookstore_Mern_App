import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios"

const Course = () => {
  const [book, setBook] = useState([]);

  const getBook = async () => {
    try {
     const res= await axios.get("http://localhost:8000/book")
     console.log(res.data)
     setBook(res.data)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getBook()
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            laudantium dignissimos recusandae possimus, sit non consequuntur
            necessitatibus distinctio ad ipsa ab corporis animi reprehenderit in
            ex repellat laboriosam minus iusto ipsum culpa, asperiores sed velit
            tempore rem incidunt eligendi dignissimos natus maxime laboriosam?
            Repellat!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
 
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
