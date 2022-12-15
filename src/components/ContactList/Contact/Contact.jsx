import React from "react";
import "./Contact.css";

class Contact extends React.Component {

      render() {
        const {item, removeContact} = this.props;
        return(
            <>
            <div>
                <p>{item.firstName} {item.lastName}</p>
                <a href={`tel:${item.number}`}>{item.number}</a>
                <button onClick={() => {removeContact(item.id)}}>remove</button>
            </div>
            </>
        )
      }
}

export default Contact;