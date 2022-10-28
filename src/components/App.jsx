import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import apiRequest from './PixabayAPI/PixabayAPI';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    hits: [],
    totalHits: 0,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query) {
      this.formFetch(query);
    }

    if (query === '') {
      return alert('Поле пошуку не може бути пустим!');
    }
    if (prevState.page !== page && page !== 1) {
      this.updatePage(prevState, page);
    }
  }

  formFetch = async query => {
    if (query === '') {
      return;
    } else this.setState({ loading: true });
    const { totalHits, hits } = await apiRequest(query, 1);
    this.setState({ totalHits, hits, page: 1, loading: false });
  };

  updateQuery = query => {
    this.setState({ query });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  updatePage = async (prevState, page) => {
    this.setState({ loading: true });
    const query = this.state.query;
    const { hits } = await apiRequest(query, page);
    this.setState({ hits: [...prevState.hits, ...hits], page });
    this.setState({ loading: false });
  };

  render() {
    const { hits, loading, totalHits, page } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.updateQuery} />
        <ImageGallery images={hits} />
        {page < totalHits && <Button loadMore={this.loadMore} />}
        {loading && <Loader />}
      </>
    );
  }
}
