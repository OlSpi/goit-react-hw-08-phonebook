import css from './Pages.module.css';

export const Home = () => {
  return (
    <div className={css.container}>
      <h1>
        Contactk manager welcome page{' '}
        <span role="img" aria-label="Greeting icon"></span>
      </h1>
    </div>
  );
};
