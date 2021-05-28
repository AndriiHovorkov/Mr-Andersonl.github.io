import {Component} from 'react'
import './Header.css'


class Header extends Component {
    render(){
        return(
            <div className='Header'>
                <div className='menu'>
                    <nav className="one">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Work</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }

}

export default Header