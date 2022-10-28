import css from './Button.module.css';

const Button = ({ loadMore }) => {
  return (
    <>
      <button type="button" onClick={loadMore} className={css.button}>
        Load More
      </button>
    </>
  );
};

export default Button;
