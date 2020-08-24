import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function Home() {

    return (
        <div className="App">
            <App/>
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Home />, rootElement);