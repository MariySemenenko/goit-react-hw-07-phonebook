
import { useDispatch, useSelector } from 'react-redux';
import { Ul } from '../StyledApp.styled';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

// відображаю список контактів і маю можливість видаляти контакт зі списку

export const ContactList = () => {
  const contactsList = useSelector(selectVisibleContacts)
  //через dispatch видаляю контакти
  const dispatch = useDispatch()
  return (
    <Ul>

      {contactsList.map(
        (
          { name, phone, id } // кожен контакт має властивість name, number, id
        ) => (
          <li key={id}>
            <p>
              {name}: {phone}
            </p>

            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        )
      )}
    </Ul>
  );
};


