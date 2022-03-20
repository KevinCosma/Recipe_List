import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className='container-fluid'>
                <h1>My Recipes</h1>
                <NavBar />
                <SearchBar />
            </div>

        )
    }
}

export default App;