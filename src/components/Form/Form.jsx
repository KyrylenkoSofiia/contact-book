import React from "react";
import "./Form.scss";

class Form extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        number: ''
    }

    handleInputChange = (e) => {
        const { value, name } = e.target;
        this.setState({
          ...this.state,
          [name]: value,
        });
    };

    sendingForm = (e) => {
        e.preventDefault();
        this.props.addNewContact(this.state);
        this.resetForm();
        this.props.toggleForm();
    }

    resetForm = () => {
        this.setState({
            firstName: '',
            lastName: '',
            number: ''
        });
      };

    render() {
      const {toggleForm} = this.props;

      return(
          <>
          <form className="form" onSubmit={this.sendingForm}>
              <input 
                type="text"
                name="firstName"
                required
                value={this.state.firstName}
                placeholder="Enter name"
                onChange={this.handleInputChange} />
              <input
                type="text"
                name="lastName"
                required
                value={this.state.lastName}
                placeholder="Enter surname"
                onChange={this.handleInputChange} />
              <input
                type="number"
                name="number"
                required
                value={this.state.number}
                placeholder="Enter phone number"
                onChange={this.handleInputChange} />
              <button
                className={`form__submit${(!(this.state.firstName && this.state.lastName && this.state.number) ? ' disable' : '')}`}
                type='submit'>
                  Submit
              </button>
              <button className="form__reset" type="reset" onClick={() => {toggleForm()}}>Reset</button>
          </form>
          </>
      )
    }
}

export default Form;