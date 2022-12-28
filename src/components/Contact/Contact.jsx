import React from "react";
import "./Contact.scss";

function Contact({item, removeContact}) {
    return (
        <>
            <div className="contact">
                <p>{item.firstName} {item.lastName}</p>
                <a href={`tel:${item.number}`}>{item.number}</a>
                <button className="contact__btn" onClick={() => {removeContact(item.id)}}>Remove</button>
            </div>
        </>
    )
}

export default Contact;