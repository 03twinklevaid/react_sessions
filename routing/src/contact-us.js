import React, {Component} from 'react';
import './App.css';

class Contact extends Component {
    state = {
        email: '',
        phone: ''
    }
    handleContact = () => {
        if(this.state.email === 'twinkle@tothenew.com' && this.state.phone === '9876543210'){
            this.props.history.push('/list');
        }
        if(this.state.email !='twinkle@tothenew.com' && this.state.phone !='9876543210'){
            alert('Entered Email or phone is incorrect ');
        }

    };
    handleChangedInput = (event, key) => {
        this.setState({[key]: event.target.value })
    }
    render() {
        return (
            <div className="App">
                <div className="border">
                    <h2>Contact-Us</h2>
                    <form onSubmit={this.handleContact}>
                        <div><label>Email:</label><input type="text" placeholder="Enter Email" value = {this.state.email} onChange={(event) =>{this.handleChangedInput(event, 'email')}} required/></div>
                        <div><label>Phone:</label><input type="text" placeholder="Enter phone" value = {this.state.phone} onChange={(event) =>{this.handleChangedInput(event, 'phone')}} required/></div>
                        <button type="submit" className="btn-style">Send</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Contact;