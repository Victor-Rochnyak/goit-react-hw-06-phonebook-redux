import ContactsList from 'components/ContactsList/ContactsList';
import FormBook from 'components/FormBook/FormBook';
import FilterContacts from '../FilterContacts/FilterContacts';

// імпорт стилів
import { AppContainer, H2 } from './App.styled';

export default function App() {

  return (
    <>
      <AppContainer>
        <H2>Contacts</H2>
        <FormBook />
        <H2>Contacts list</H2>
        <FilterContacts />
        <ContactsList />
      </AppContainer>
    </>
  );
}
