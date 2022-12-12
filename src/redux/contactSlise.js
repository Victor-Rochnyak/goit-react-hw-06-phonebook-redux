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
    filter:'',
  },
  reducers:{
    addContacts(state,action){
        state.contactItems.push(action.payload)
        console.log(state)
        console.log(action)
    },
    deleteContacts(state,action){},
    filterContacts(state,action){},
  }
});

export const{addContacts,deleteContacts,filterContacts}=contactSlice.actions;

export default contactSlice.reducer;