import React, {Component} from 'react';
import '../App.css';
import{Link} from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div className="App">
                <div className="border">
                    <h2>About Us</h2>
                    <p className="about">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                    <Link to="/contact"><button type="submit" className="btn-style">Contact Us</button></Link>
                </div>
            </div>
        );
    }
}
export default About;