import { Search } from "../../components/Search/Search";
import { BookList } from "../../components/BookList/BookList";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
  return (
    <>
      <Search />
      <BookList />
      <Footer />
    </>
  );
};
