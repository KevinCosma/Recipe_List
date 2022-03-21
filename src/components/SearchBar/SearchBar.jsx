import React, {Component} from 'react';
import './SearchBar.css'
import magnifyingGlass from '../images/magnifyingGlass.jpg'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() { 
        return (  
            <div className="search-bar">
                <form id="form">
                    <input class="text" type="text" placeholder="Search recipes..." name="search" />
                    <button type="submit"></button>
                </form>
            </div>
        )
    }
}
 
export default SearchBar;