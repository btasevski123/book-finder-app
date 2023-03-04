import { Link } from "react-router-dom";
import "./ErrorPage.scss";
export const ErrorPage = () => {
  return (
    <div className="error-page">
      <h2>Error 404!</h2>
      <Link className="error-page__btn" to="/">
        Back to Homepage
      </Link>
    </div>
  );
};
