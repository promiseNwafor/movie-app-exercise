import { useCallback, useEffect, useState } from "react";
import axios from "axios";

let pageNo = Math.floor(Math.random() * 100) + 1;

const useFetch = (query) => {
  const BASE_URL = `http://www.omdbapi.com/?s=${
    query || "all"
  }&page=${pageNo}&apikey=9ce18a4d`;
  // const BASE_URL = `${process.env.REACT_APP_BASE_URL}?s=${
  //   query || "all"
  // }&page=${pageNo}&apikey=${process.env.REACT_APP_API_KEY}`;

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await axios({
        url: BASE_URL,
      });
      setMovies(data?.data?.Search);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
      console.log(err, "error msg");
    }
  }, [BASE_URL]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { movies, loading, error };
};

export default useFetch;
