import "./Book.scss";
import { ImBook } from "react-icons/im";
import { Link } from "react-router-dom";

export const Book = ({ id, title, author, genre }) => {
  return (
    <div className="book-card">
      <div className="book-card__header">
        <ImBook className="book-card__header--icon" />
        <h3>{title}</h3>
      </div>
      <div className="book-card__body">
        <p>
          <strong>Author:</strong> {author}
        </p>
        <p>
          <strong>Genre:</strong> {genre}
        </p>

        <Link to={`/about/${id}`} className="book-card__body--button">
          View More
        </Link>
      </div>
    </div>
  );
};
