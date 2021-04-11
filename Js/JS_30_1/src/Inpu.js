import React from 'react' 
const NewName = []

export class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", NewName};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ value: ""});

    NewName.push(this.state.value) 
    return NewName
  }

  delite = (index) => {
    let {NewName} = this.state
    delete NewName[index]
    this.setState({ value: ""});
    return NewName
  }


  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Имя:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Отправить" />
            </form>
            {this.state.NewName.map((NewName, index) => 
            <div key={NewName + index}>
              <div> {NewName}  <button onClick={()=> this.delite(index)}>Delited</button> </div>
            </div>
          )}
        </div>
    );
  }
}

/* export default NameForm */
