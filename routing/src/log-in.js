import React, {Component} from 'react';
import './App.css';
import{Link} from 'react-router-dom';

class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    handleLogin = (event) => {
        event.preventDefault();

        if(this.state.username === 'Twinkle' && this.state.password === 'Twinkle'){
            localStorage.setItem('isLoggedIn', "true");
            this.props.history.push('/about');
        }

    };

    handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
    };

    handleChangedInput = (event, key) => {
        this.setState({[key]: event.target.value })
    };

    render() {
        const isInLocalStorage = localStorage.isLoggedIn;
        return (
            <div className="App">
                <div className="border">
                    <div>
                        <h2>Home</h2>
                        <div>
                            <Link to="/about"><button>About Us</button></Link>
                            {
                                isInLocalStorage ? (
                                    <Link to="/contact">
                                        <button>Contact Us</button>
                                    </Link>
                                ) : null
                            }
                        </div>
                    </div>
                    {
                        isInLocalStorage  ? (
                            <form onSubmit={this.handleLogout} className="p-10">
                                <div> User is Already Logged In </div>
                                <button type="submit" className="btn-style">Log Out</button>
                            </form>
                        ) : (
                            <form onSubmit={this.handleLogin} className="p-10">
                                <div><label>User-Name:</label><input type="text" placeholder="Enter User Name" value = {this.state.username} onChange={(event) =>{this.handleChangedInput(event, 'username')}} required/></div>
                                <div><label>Password:</label><input type="text" placeholder="Enter Password" value = {this.state.password} onChange={(event) =>{this.handleChangedInput(event, 'password')}} required/></div>
                                <button type="submit" className="btn-style">Log In</button>
                            </form>
                        )
                    }
                </div>
            </div>
        );
    }
}
export default Login;