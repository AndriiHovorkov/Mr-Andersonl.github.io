import {Component} from 'react'
import './Leftpanel.css'
import Leftmenu from './Leftmenu.js'
import Leftimg from './Leftimg.js'


class Leftpanel extends Component {
    render(){
        return(
            <div className='panel'>
                <Leftmenu/>
                <Leftimg/>
            </div>
        );
    }

}

export default Leftpanel