import React from 'react';

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
                    <span class="nav-text"></span>
                        <span>Home</span>
                        <span>Favorites</span>
                        <span>Asian</span>
                        <span>Italian</span>
                        <span>Mexican</span>
                        <span>Appetizers</span>
                        <span>Desserts</span>
                        <span>Under 30min</span>
                </div>
            </nav>
        )
    }
}
 
export default NavBar;