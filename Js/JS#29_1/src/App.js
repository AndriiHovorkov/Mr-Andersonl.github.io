import React, {Component} from 'react'; 
import './App.css';

let list = [ 
  { id: 'i_20', price: 2300, name: 'Example_1', color: false},
  { id: 'h_30', price: 3500, name: 'Example_2', color: false},
  { id: 'a_10', price: 500, name: 'Example_3', color: false},
  { id: 'v_40', price: 500, name: 'Example_4', color: false},
  { id: 'f_70', price: 1000, name: 'Example_5', color: false},
  { id: 't_60', price: 5700, name: 'Example_6', color: false}
];

export default class App extends Component {
  state = {
    thisList: [],
  };

  randArrey() {
    this.setState({thisList: list});
    const arrList =[...list];
  
    let newArr = arrList.filter(list => list.color === false);
    this.timerID = setInterval(() => {
      arrRand(newArr).color === false
        ? (arrRand(newArr).color = true)
        : (arrRand(newArr).color = true);
      this.setState({
        thisList: arrList,
      });
    }, 2000);
  }

  colorUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <table className="tab">
        <tbody>
          {this.state.thisList.map((list, index) => 
            <tr className={list.color === true ? 'green' : 'list'} key={list.id + index}>
              <td className="tab_tb"> {list.id} </td>
              <td className="tab_tb"> {list.price} </td>
              <td className="tab_tb"> {list.name} </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

function arrRand(arr) {
  var rand = arr.filter(list => list.color === false);
  var rand = Math.floor(Math.random() * arr.lenght);
  return arr[rand];
}
/* export default App; */
