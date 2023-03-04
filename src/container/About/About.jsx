import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ErrorPage } from "../../components/ErrorPage/ErrorPage";
import { Context } from "../../context/dataContext";
import { ImBook } from "react-icons/im";
import "./About.scss";

export const About = () => {
  const { books } = useContext(Context);

  const getBookById = (id) => {
    if (!id) {
      return undefined;
    }
    return books.find((book) => book.id === +id);
  };

  const { id } = useParams();
  const book = getBookById(id);

  if (!book) {
    return <ErrorPage />;
  }

  return (
    <>
      <div className="about-book">
        <div className="about-book__content">
          <div className="about-book__content--header">
            <ImBook className="about-book__content--header--icon" />
            <h3>{book.title}</h3>
          </div>
          <p>
            <strong>Author:</strong> {book.author}
          </p>
          <p>
            <strong>Genre:</strong> {book.genre}
          </p>
          <p>
            In case the data base is bigger, the rest of the informations will
            be displayed here.
          </p>

          <Link to={"/"} className="about-book__content--button  ">
            ⬅ Go back to Homepage
          </Link>
        </div>
      </div>
    </>
  );
};
