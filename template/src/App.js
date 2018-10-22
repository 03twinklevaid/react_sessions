import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import content from './App.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className={App}>
        <header>
          This is a Header Component
        </header>
        <div className='content'>
          <section>
            This is a Section Component: <br/>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
          </section>
          <aside>
            <ul>
                <li>Aside Component 1</li>
                <li>Aside Component 2</li>
                <li>Aside Component 3</li>
            </ul>
          </aside>
        </div>
        <footer>
          This is a Footer Component
        </footer>
      </div>

    );
  }
}

export default App;
