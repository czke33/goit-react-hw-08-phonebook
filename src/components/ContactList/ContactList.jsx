import React from 'react';
import Contact from './Contact';

import { getContacts } from '../../redux/selectors';
import { getFilter } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';


const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filterContacts = useSelector(getFilter);
    const dispatch = useDispatch();
    
   //const entries = Object.entries(contacts);
  //console.log(contacts);
    const handleDelete = contactId => {
      dispatch(deleteContact({contactId}));
    };
  return (
    <ul>
      {contacts.filter((contact) => contact.name.toLowerCase().includes(filterContacts.toLowerCase()))
        .map((contact) => {
          return (
            <Contact key={contact.id}>
              {contact.name} : {contact.phone}{' '}
              <button id={contact.id} onClick={()=>handleDelete(contact.id)}>
                Delete
              </button>
            </Contact>
          );
        })}
    </ul>
  );
};


export default ContactList;