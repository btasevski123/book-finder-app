import { Book } from "../Book/Book";
import "./BookList.scss";

export const BookList = ({ books, error }) => {
  const sortedBooks = books.sort((a, b) => (a.author > b.author ? 1 : -1)); // sort alphabetically
  return (
    <div className="app__wrapper ">
     <div className="book-list">
     {sortedBooks.map((book, index) => (
        <Book key={index} {...book} />
      ))}

      {error && <p className="book-list__errormsg ">{error}</p>}
     </div>
    </div>
  );
};
