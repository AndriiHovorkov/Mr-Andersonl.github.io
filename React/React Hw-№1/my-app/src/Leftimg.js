import {Component} from 'react'
import './Leftimg.css'


class Leftimg extends Component {
    render(){
        return(
            <div>
                <div className='wrap-img'>
                    <img className='image' src="https://vjoy.cc/wp-content/uploads/2019/06/1-12.jpg" alt="альтернативный текст"></img>
                </div>
                <div className='wrap-img'>
                    <img className='image' src="https://telecomdom.com/wp-content/uploads/2020/02/kartinki-na-telefon-5-576x1024.jpg" alt="альтернативный текст"></img>
                </div>
                <div className='wrap-img'>
                    <img className='image' src="https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg" alt="альтернативный текст"></img>
                </div>
            </div>

            
        );
    }

}

export default Leftimg