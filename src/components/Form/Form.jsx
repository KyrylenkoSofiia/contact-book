import React, {useState} from "react";
import "./Form.scss";

function Form({toggleForm, addNewContact}) {
    const [contact, setContact] = useState({firstName: '', lastName: '', number: ''});

    const handleInputChange = (e) => {
        const {value, name} = e.target
        setContact({
            ...contact,
            [name]: value
        })
    }

    const sendingForm = (e) => {
        e.preventDefault();
        addNewContact(contact);
        resetForm();
        toggleForm();
    }

    const resetForm = (e) => {
        setContact({
            ...contact
        })
    }

    return(
        <>
            <form className="form" onSubmit={sendingForm}>
                <input
                    type="text"
                    name="firstName"
                    required
                    value={contact.firstName}
                    placeholder="Enter name"
                    onChange={handleInputChange} />
                <input
                    type="text"
                    name="lastName"
                    required
                    value={contact.lastName}
                    placeholder="Enter surname"
                    onChange={handleInputChange} />
                <input
                    type="number"
                    name="number"
                    required
                    value={contact.number}
                    placeholder="Enter phone number"
                    onChange={handleInputChange} />
                <button
                    className={`form__submit${(!(contact.firstName && contact.lastName && contact.number) ? ' disable' : '')}`}
                    type='submit'>
                    Submit
                </button>
                <button className="form__reset" type="reset" onClick={() => {toggleForm()}}>Reset</button>
            </form>
        </>
    )
}

export default Form;