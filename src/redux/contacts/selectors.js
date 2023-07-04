
//доступ до глобального стейту
//створюю 2 селекти які повертають дані (items та filter)

// зберігаються контакти які передаються в App
export const selectContacts = ({ contacts: { items } }) => items;
//передаю selectFilter в форму
export const selectFilter = ({ filter }) => filter;

export const selectLoading = ({contacts: {isLoading}}) => isLoading;
export const selectError = ({contacts: {error}}) => error;

//створюю масив відфільтрованних контактів та передаю у ContactList
export const selectVisibleContacts = ({ contacts: { items }, filter }) => {
  if (!filter) {
    return items;
  }
  return items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
};
