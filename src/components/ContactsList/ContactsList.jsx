import React from 'react';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactSlise';
import { getFilter } from 'redux/filterSlise';
// Стилі
import { List } from './ContactsList.styled';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFindContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const getFindContact = getFindContacts();

  return (
    <List>
      {getFindContact.map(contact => (
        <ContactsItem key={contact.id} {...contact} />
      ))}
    </List>
  );
};

export default ContactsList;
