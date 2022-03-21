import React, {Component} from 'react';
import './SearchBar.css'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() { 
        return (  
            <div id="form" className="search-bar">
                <form id="form">
                    <input type="text" placeholder="Search recipes..." name="search" />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}
 
export default SearchBar;