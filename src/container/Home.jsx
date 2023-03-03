import { Search } from "../components/Search/Search";
import { useState } from "react";
import booksData from "../listofbooks.json";
import { BookList } from "../components/BookList/BookList";
import { Footer } from "../components/Footer/Footer";

export const Home = () => {
  const [books, setBooks] = useState(booksData); //state where we store all data.
  //if it would be a real application, here instead of directly placing the data in the state, we will have to make a fetch and then set the data
  const [error, setError] = useState("");

  const handleSearch = (querry) => {
    //a function where we filter the books by author, genre and title анд also protect against entering nonsense in the input.
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
  return (
    <>
      <Search books={booksData} handleSearch={handleSearch} />
      <BookList books={books} error={error} />
      <Footer />
    </>
  );
};
