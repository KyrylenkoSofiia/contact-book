import React from "react";
import Contact from "./Contact/Contact";

class ContactList extends React.Component {
      render() {
        const {contacts, removeContact} = this.props;

        return(
            <>
            {contacts.map((item) => {
              return <Contact item={item} key={item.id} removeContact={removeContact} />
            })}
            </>
        )
      }
}

export default ContactList;