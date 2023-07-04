import { useState } from 'react';

import { Form } from '../StyledApp.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactForm = () => {
  const [data, setData] = useState({ name: '', phone: '' });
  //тут зберігається імя та номер
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget; //отримую доступ до значення поля за допомогою currentTarget
    setData(prevData => ({ ...prevData, [name]: value })); //оновлюю ключ у стейті за допомогою динамічного ключа
  };

  //роблю перевірку чи збігається номер та імя
  const handleSubmit = e => {
    const { name, phone } = data;
    e.preventDefault();
    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.phone === phone
      )
    ) {
      //reset
      setData({ name: '', phone: '' });
      return alert(`${name} or ${phone} is already in contacts`);
    }

    //тут створюється новий об'єкт newContact
    const newContact = {
      ...data,
    };
    //дістаю метод додавання із contactSlice
    dispatch(addContact(newContact));
    setData({ name: '', phone: '' });
  };

  const { name, phone } = data;

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={handleChange}
          />
        </label>

        <button>Add Contact</button>
      </Form>
    </>
  );
};
