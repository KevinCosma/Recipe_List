import React, {Component} from 'react';
import './NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() { 
        return (  
            <nav>
                <div class="nav-bar">
                    <span class="nav-text">
                        <span class="add-recipe">Add Recipe</span>
                        <span>Favorites</span>
                        <span>Asian</span>
                        <span>Italian</span>
                        <span>Mexican</span>
                        <span>Salads</span>
                        <span>Appetizers</span>
                        <span>Desserts</span>
                        <span>Under 30min</span>
                        <span>Under 400 Cal</span>
                    </span>
                </div>
            </nav>
        )
    }
}
 
export default NavBar;