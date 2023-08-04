import { NavStyledLink } from 'components/Navigation/styled';

export const AuthNav = () => {
  return (
    <div>
      <NavStyledLink to="/register">Register</NavStyledLink>
      <NavStyledLink to="/login">Log In</NavStyledLink>
    </div>
  );
};
