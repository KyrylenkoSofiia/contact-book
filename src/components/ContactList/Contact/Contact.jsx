import React from "react";
import "./Contact.scss";

class Contact extends React.Component {

      render() {
        const {item, removeContact} = this.props;
        return(
            <>
            <div className="contact">
                <p>{item.firstName} {item.lastName}</p>
                <a href={`tel:${item.number}`}>{item.number}</a>
                <button className="contact__btn" onClick={() => {removeContact(item.id)}}>Remove</button>
            </div>
            </>
        )
      }
}

export default Contact;