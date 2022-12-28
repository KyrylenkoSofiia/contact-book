import React from "react";
import Contact from "../Contact/Contact";

function ContactList({contacts, removeContact}){
    return(
        <>
            {contacts.map((item) => {
                return <Contact item={item} key={item.id} removeContact={removeContact} />
            })}
        </>
    )
}

export default ContactList;