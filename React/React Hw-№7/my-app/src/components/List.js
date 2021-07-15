import { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import './List.css'
import {addItem,changeItem,updateItem} from '../store/actions/ListActions'

function List() {
    const {list, inputValue} = useSelector((state) => ({
        list: state.list, 
        inputValue: state.inputValue
    }));
    const dispatch = useDispatch();

    function addList(e)  {
        let titleValue = inputValue
        let newList = {id: Date.now(), title: titleValue, isDone: false}
        dispatch(addItem(newList))
    }

    function changeHendler(e) {
        dispatch(changeItem(e.target.value))
    }

    function handleClick(index){
            const newList = list;
            const item = newList[index];
            item.isDone = !item.isDone;
            newList[index] = item;

            dispatch(updateItem(newList))
        }
        const itemList = "item-list"
        return (
            <div className="contein">
                <div className="list-wrap">
                    <ul>
                        {list.map((item, index) =>{
                            return (
                                <li 
                                    className={item.isDone ? 'green'  + ' ' + itemList : 'yellow'  + ' ' + itemList}
                                    key={item.id}
                                    onClick={() => handleClick(index)}
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
                        value={inputValue}
                        onChange={changeHendler}
                    />

                    <button onClick={addList}>Sund</button>
                </div>
                
            </div>
        );

}

export default List;