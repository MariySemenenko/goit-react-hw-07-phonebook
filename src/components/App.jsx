import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Div, H2 } from './StyledApp.styled';
import {
  selectContacts,
  selectError,
  selectLoading,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

export const App = () => {
  //додаю контакти з файлу  selectors.js
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  //  console.log(contacts)
  return (
   
    <Div>
      <ContactForm />
      {isLoading && <p>Loading</p>}
      {error && <p>{error}</p>}
      <H2>Contacts {contacts.length}</H2>
      <Filter />
      {contacts.length ? <ContactList /> : <p>No contacts in phonebook</p>}
    </Div>
  );
};
