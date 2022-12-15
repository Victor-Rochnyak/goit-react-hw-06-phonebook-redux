import { Item, Button } from './ContactsItem.styled';

import { deleteContacts } from 'redux/contactSlise';
import { useDispatch } from 'react-redux';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      {name}: {number}
      <Button onClick={() => dispatch(deleteContacts( id ))}>Delete</Button>
    </Item>
  );
};
