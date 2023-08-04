// import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import css from './Pages.module.css';

export const Login = () => {
  return (
    <div className={css.container}>
      <LoginForm />
    </div>
  );
};
