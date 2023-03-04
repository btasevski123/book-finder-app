import { useContext, useState } from "react";
import "./Search.scss";
import { FaSearch } from "react-icons/fa";
import { TfiHandPointDown } from "react-icons/tfi";
import { Context } from "../../context/dataContext";

export const Search = () => {
  const { handleSearch } = useContext(Context);
  const [querry, setQuerry] = useState(""); //initially an empty state where we will store the value entered by the user in the input field.
  const [error, setError] = useState(false);

  const handleQuerryChange = (e) => {
    //through this function we set the state to the value from the input
    setQuerry(e.target.value);

    if (error) {
      setError(false);
    }
  };

  const handleSubmit = (e) => {
    //this function is for submitting the form.
    e.preventDefault();
    if (querry) {
      handleSearch(querry);
    } else {
      setError(true);
    }
  };

  return (
    <div className="app__wrapper book-search__banner">
      <h1 className="text-center">Find a book!</h1>
      <span>
        <TfiHandPointDown />
      </span>
      <div className="book-search__banner--form">
        <form onSubmit={handleSubmit} className="app__flex">
          <input
            type="text"
            placeholder="Search by Title, Author or Genre"
            value={querry}
            onChange={handleQuerryChange}
          />
          <button type="submit">
            {" "}
            <FaSearch />
          </button>
        </form>
      </div>
      {error && <p>*Please type something in this field.</p>}
    </div>
  );
};
