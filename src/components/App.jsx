import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import apiRequest from '../API/PixabayAPI';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';

export const App = () => {
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [hits, setHits] = useState([]);
  const [totalHits, settotalHits] = useState(0);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    if (query === '') {
      return alert('Поле пошуку не може бути пустим!');
    }

    if (query) formFetch(query);
  }, [query]);

  useEffect(() => {
    if (page !== 1) {
      updatePage(hits, page);
    }
    // eslint-disable-next-line
  }, [page]);

  const formFetch = async query => {
    if (query === '') {
      return;
    } else setloading(true);
    const { totalHits, hits } = await apiRequest(query, 1);
    setloading(false);
    settotalHits(totalHits);
    setHits(hits);
    setPage(1);
  };

  const updatePage = async (prevState, page) => {
    setloading(true);
    const data = await apiRequest(query, page);
    setHits([...hits, ...data.hits]);
    setPage(page);
    setloading(false);
  };

  const updateQuery = query => {
    setQuery(query);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Searchbar onSubmit={updateQuery} />
      <ImageGallery images={hits} />
      {page < totalHits && <Button loadMore={loadMore} />}
      {loading && <Loader />}
    </>
  );
};
