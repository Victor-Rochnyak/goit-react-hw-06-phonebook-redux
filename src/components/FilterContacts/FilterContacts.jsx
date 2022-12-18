import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact, getFilter } from 'redux/filterSlise';

// Стилі
import { Label, Input } from './FilterContacts.styled';

const FilterContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  
  const onChange = event => {
    dispatch(filterContact(event.target.value));
  };

  return (
    <Label>
      <Input
        type="text"
        name={filter}
        value={filter}
        onChange={onChange}
        placeholder="Find contacts by name"
      />
    </Label>
  );
};
export default FilterContacts;


