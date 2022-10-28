import { Component } from 'react';
import css from './Searchbar.module.css';
import { MdFindInPage } from 'react-icons/md';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ ...this.state });
  };

  render() {
    const { query } = this.state;
    return (
      <header className={css.searchBar}>
        <form onSubmit={this.handleSubmit} className={css.searchForm}>
          <button type="submit" className={css.searchButton}>
            <MdFindInPage style={{ width: 40, height: 50, fill: '#303f9f ' }} />
          </button>

          <input
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={query}
            name="query"
          />
        </form>
      </header>
    );
  }
}

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
