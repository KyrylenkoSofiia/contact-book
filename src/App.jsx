import React from 'react';
import './App.scss';
import ContactList from './components/ContactList/ContactList';
import Form from './components/Form/Form';

const contacts = [
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
]

class App extends React.Component {
    state = {
      contacts: contacts,
      isAdding: false,
    };

  removeContact = (id) => {
    this.setState({ contacts: this.state.contacts.filter((item) => id !== item.id) });
  };

  addNewContact =(item) => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        { id: Date.now(), ...item },
      ],
    });
  }

  toggleForm = () => {
    this.setState({isAdding: !this.state.isAdding});
  }

  render() {
    return (
      <div className="container">
      <h1>Contact book</h1>  
      <ContactList contacts={this.state.contacts} removeContact={this.removeContact} />
      {
        this.state.isAdding 
        ? 
        <Form toggleForm={this.toggleForm} addNewContact={this.addNewContact} />
        :
        <button className="add-new-contact" onClick={this.toggleForm}>Add New Contact</button>
      }
      </div>
    )
  }
}

export default App;
