import React from 'react';
import './App.css';
// import Radium, {StyleRoot} from 'radium';
import Person
from './Person/Person.js';



class App extends React.Component {//state can only access in class based components
  state = {
    persons: [
      {id: "eyhw", name: 'Khoury', age: 28},
      {id: "eycf", name: 'Ahjah', age: 29},
      {id: "eahf", name: "K3", age: 1}
    ], 
    showPerson: false
  }

  
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;
    
    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1) // removes one element our of the array
    this.setState({persons: persons});

  }

  togglePersonHandler = () => {
    const show = this.state.showPerson;
  this.setState({
    showPerson: !show
  })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      color: 'white',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }

    };

    let persons = null;

    if(this.state.showPerson) {
      persons =  (
          <div>
            {this.state.persons.map((person, index) => {
              return(
                <Person 
                click = {() => this.deletePersonHandler(index)}
                name= {person.name}
                age={person.age} 
                key={person.id}
                changed= {(event) =>this.nameChangeHandler(event, person.id)}/>
              )
            })}
          </div>

      );
      style.backgroundColor  = "red";
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }

    }
//add classes dynamically////
    const classes = []
    if(this.state.persons.length <= 2) {
      classes.push('red') //classes = ['red']
    }
  if(this.state.persons.length <= 1) {
    classes.push('bold') //classes = ['red', 'bold']
  }
    return(
      
        <div className="App">
          <header className="App-header">
            <h1>Hello' I am React</h1>
            <p className={classes.join(' ')}>This really works</p>
            <button 
            style={style}
            onClick={this.togglePersonHandler}>Toggle People</button>
            {persons}
          </header>
        </div>
       
    );
  }
  
}

export default App;
