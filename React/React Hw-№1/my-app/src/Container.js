import {Component} from 'react'
import './Container.css'
import Leftpanel from './Leftpanel.js'
import Header from './Header.js'
import Main from './Main.js'


class Container extends Component {
    render(){
        return(
            <div className='wrapper'>
                <div>
                    <Leftpanel/>
                </div>

                <div>
                    <Header/>
                   <Main/>
                </div>
            </div>

        );
    }

}

export default Container