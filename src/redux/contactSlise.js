import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactItems: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // filter: '',
  },
  reducers: {
    addContacts(state, action) {
      state.contactItems.unshift(action.payload); //unshift -добавляє контакт в начало,
      // push - добавляє контакт в кінець
      console.log(state);
      console.log(action);
    },

    deleteContacts(state, action) {
      state.contactItems = state.contactItems.filter(
        contact => contact.id !== action.payload
      );
    },
    // filterContact(state, action) {
    //   state.filter = action.payload;
    // },
  },
});

export const getContacts = state => state.contacts.contactItems;
// export const getFilter = state => state.contacts.filter;

export const {
  addContacts,
  deleteContacts,
} = contactSlice.actions; //filterContact

export const contactsReduser = contactSlice.reducer;
