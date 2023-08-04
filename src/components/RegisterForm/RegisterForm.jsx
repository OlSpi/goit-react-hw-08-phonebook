import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import { useState } from 'react';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const credentials = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    try {
      const resultAction = await dispatch(register(credentials));
      if (register.fulfilled.match(resultAction)) {
        form.reset();
        setError(null);
      }
    } catch (error) {
      setError(error.payload);
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input className={css.input} type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input className={css.input} type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input className={css.input} type="password" name="password" />
      </label>
      <button className={css.button} type="submit">
        Register
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};
