import React, {useState} from 'react';
import './App.scss';
import ContactList from './components/ContactList/ContactList';
import Form from './components/Form/Form';

function App(props) {

  const [contacts, setContacts] = useState( [
      {
          id: 0,
          firstName: 'John',
          lastName: 'Dow',
          number: '+445791111111'
      },
      {
          id: 1,
          firstName: 'Richard',
          lastName: 'Gir',
          number: '+445792222222'
      }
  ]);
  const [isAdding, setAdding] = useState(false);

   const removeContact = (id) => {
     const newContacts = contacts.filter(item => item.id !== id);
     setContacts(newContacts);
   }

  const addNewContact = (item) => {
    item = {...item, id: Date.now()};
    setContacts([...contacts, item]);
  }

   const toggleForm = () => {
    setAdding(!isAdding);
   }


  return(
      <div className="container">
        <h1>Contact book</h1>
        <ContactList contacts={contacts} removeContact={removeContact} />
        {
         isAdding
         ?
         <Form toggleForm={toggleForm} addNewContact={addNewContact} />
         :
         <button className="add-new-contact" onClick={toggleForm}>Add New Contact</button>
       }
       </div>
  )
}

export default App;
