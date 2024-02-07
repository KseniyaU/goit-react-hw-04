//npm install axios
import axios from "axios";
import { useEffect, useState } from "react";
import css from "../App/App.module.css";
//npm install react-hot-toast
import { Toaster } from "react-hot-toast";
import { SearchBar } from "../SearchBar/SearchBar";
import { ImageGallery } from "../ImageGallery/ImageGallery.jsx";
import { Loader } from "../Loader/Loader.jsx";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage.jsx";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn.jsx";

function App() {
  const key = "CS-WUSttKITitf62ZZvU2KgNX3krMbctQMPMvCg8PHM";
  const [elements, setElements] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchImages = async (newQuery) => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setElements([]);
  };
  const handleLoadMore = () => {
    if (page <= 1000) {
      setPage(page + 1);
      // console.log(page);
    }
  };
  useEffect(() => {
    if (query === "") {
      return;
    }
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(
          `https://api.unsplash.com/search/photos/?client_id=${key}&query='${
            query.split("/")[1]
          }&page=${page}&per_page=12`
        );
        // console.log(response);
        setElements((prevElem) => [...prevElem, ...response.data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    // console.log("ele", query.split("/")[1], "pag", page);
  }, [query, page]);

  //   console.log(elements);
  return (
    <div className={css.containerApp}>
      <SearchBar onSearch={searchImages}></SearchBar>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery onElements={elements} />
      <LoadMoreBtn onClick={handleLoadMore} onElements={elements} />
      <Toaster />
    </div>
  );
}

export default App;