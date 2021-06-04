import { Component } from "react";
import './List.css'

class List extends Component {
    state = {
        list:[
            
        ],
        inputValue: 'test',
    }

    addList = (e) => {
        let titleValue = this.state.inputValue
        this.setState({
            list:[...this.state.list, {id: Date.now(), title: titleValue, isDone: false}]
        })
    }

    changeHendler = (e) => {
        this.setState({
            inputValue: e.target.value,
        })
    }

    handleClick = (index) => {
            const newList = this.state.list;
            const item = newList[index];
            item.isDone = !item.isDone;
            newList[index] = item;
            this.setState({
                list: newList
            });
        }
        

    render(){
        return (
            <div className="contein">
                <div className="list-wrap">
                    <ul>
                        {this.state.list.map((item, index) =>{
                            return (
                                <li 
                                    className={item.isDone ? 'green'  + ' ' + 'item-list' : 'yellow'  + ' ' + 'item-list'}
                                    key={item.id}
                                    onClick={() => this.handleClick(index)}
                                >
                                    {item.title}
                                </li>
                            )
                        })}
                    </ul>
                    
                </div>

                <div className="input-wrap">
                    <input 
                        type="text" 
                        value={this.state.inputValue}
                        onChange={this.changeHendler}
                    />

                    <button onClick={this.addList}>Sund</button>
                </div>
                
            </div>
        );
    }

}

export default List;