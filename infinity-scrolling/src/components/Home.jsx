import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import BookComponent from "./BookComponent"; // Correct import

const Home = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getCardData = async () => {
    const res = await fetch(
      `https://fuzzy-erin-gaiters.cyclic.app/book?_limit=9&_page=${page}`
    );
    const data = await res.json();
    setCard((prev) => [...prev, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  const handleInfiniteScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 1 &&
      !loading
    ) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [loading]);

  return (
    <>
      <BookComponent movieInfo={card} />
      {loading && <Loading />}
    </>
  );
};

export default Home;
