import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
// Стилі
import { Form, Label, Input, Button } from './FormBok.styled';

import { useDispatch, useSelector } from 'react-redux';
import { addContacts, getContacts } from 'redux/contactSlise';

export default function FormBook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // Генератор ID
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
 
  const handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const checkContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    checkContact
      ? alert(`${name} is already in contact`)
      : dispatch(addContacts(newContact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        Name:
        <Input
          id={nameInputId}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </Label>
      <Label htmlFor={numberInputId}>
        Number:
        <Input
          id={numberInputId}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add Contact</Button>
    </Form>
  );
}

FormBook.prototypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
