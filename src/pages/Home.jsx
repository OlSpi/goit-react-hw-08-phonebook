import css from './Pages.module.css';
import myImg from './clipart.png';

export const Home = () => {
  return (
    <div className={css.container}>
      <h1>Contact manager welcome page </h1>
      <img className={css.img} src={myImg} alt="" />
    </div>
  );
};
