import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
// Стилі
import { Form, Label, Input, Button } from './FormBok.styled';

export default function FormBook({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

   // Генератор ID
   const nameInputId = nanoid();
   const numberInputId = nanoid();

   
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
  // Сабміт на кнопку та ресет
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);

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
