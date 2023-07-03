import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Div, H2 } from './StyledApp.styled';
import { selectContacts } from 'redux/contacts/selectors';

export const App = () => {
  //додаю контакти з файлу  selectors.js 
  const contacts = useSelector(selectContacts);
  //  console.log(contacts)
  return (
    // функція onSubmitData передається як властивість для додавання нового контакту
    <Div>
      <ContactForm />

      <H2>Contacts {contacts.length}</H2>
      <Filter />
      {contacts.length ? <ContactList /> : <p>No contacts in phonebook</p>}
    </Div>
  );
};
