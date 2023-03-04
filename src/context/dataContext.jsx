import { createContext, useState } from "react";
import booksData from "../listofbooks.json";

export const Context = createContext({});

export const Provider = ({ children }) => {
  const [books, setBooks] = useState(booksData);
  const [error, setError] = useState("");

  const handleSearch = (querry) => {
    const Querry = querry.toLowerCase();

    const filteredBook = booksData.filter((book) => {
      const { title, author, genre } = book;

      return (
        title.toLowerCase().includes(Querry) ||
        author.toLowerCase().includes(Querry) ||
        genre.toLowerCase().includes(Querry)
      );
    });

    if (filteredBook.length > 0) {
      setBooks(filteredBook);
      setError("");
    } else {
      setBooks([]);
      setError("You entered the wrong words, please try again.");
    }
  };

  const valueObj = {
    books,
    error,
    handleSearch,
  };

  return <Context.Provider value={valueObj}>{children}</Context.Provider>;
};
