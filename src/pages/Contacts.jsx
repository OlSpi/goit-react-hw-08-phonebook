import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsAsync } from 'redux/contactsSlice';
import css from './Pages.module.css';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContactsAsync());
  }, [dispatch]);

  return (
    <>
      <div className={css.container}>
        <h2>Phonebook</h2>
        <ContactForm />
        <h2>Contacts</h2>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error {error}</p>}
        <Filter />
        <ContactList />
      </div>
    </>
  );
};
