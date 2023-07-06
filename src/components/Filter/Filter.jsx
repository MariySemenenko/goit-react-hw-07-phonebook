import { useDispatch, useSelector } from 'react-redux';
import { Label } from '../StyledApp.styled';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';

//тут виконується пошук імені в телефонній книзі

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <Label>
      <label>
        Find contacts by name
        <input
          type="name"
          value={filter}
          onChange={e => dispatch(setFilter(e.currentTarget.value.trim()))}
        />
      </label>
    </Label>
  );
};
