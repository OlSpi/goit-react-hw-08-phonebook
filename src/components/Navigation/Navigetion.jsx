import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { NavStyledLink } from './styled';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavStyledLink to="/">Home</NavStyledLink>
      {isLoggedIn && <NavStyledLink to="/contacts">Contacts</NavStyledLink>}
    </nav>
  );
};
