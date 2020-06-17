import React from 'react';
import classes from  './App.module.css';
// import Radium, {StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
// import styled from 'styled-components';

// const StyledButton = styled.button`
// background-color: ${props => props.alt ? 'red' : 'green'};
//       font: inherit;
//       border: 1px solid blue;
//       padding: 8px;
//       cursor: pointer;
//       color: white;
      
//       &:hover {
//         background-color: ${props => props.alt ? 'salmon' : 'green'};
//         color: black;
//     }
// `;



class App extends React.Component {//state can only access in class based components
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  
  state = {
    persons: [
      {id: "eyhw", name: 'Khoury', age: 28},
      {id: "eycf", name: 'Ahjah', age: 29},
      {id: "eahf", name: "K3", age: 1}
    ], 
    showPerson: false,
    showCockpit: true
  }

  static  getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }




  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    return true;
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
    console.log('[App.js] render')

    // const style = {
    //   backgroundColor: 'green',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   color: 'white',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }

    // };

    let persons = null;

    if(this.state.showPerson) {
      persons =  <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangeHandler} />;
      // style.backgroundColor  = "red";
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
      
    }
//add classes dynamically////
   
    return(
      
        <div className={classes.App}>
          <button onClick={() => {this.setState({showCockpit: false})
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? ( <Cockpit 
            title={this.props.appTitle}
            showPerson={this.state.showPerson}
            personsLength={this.state.persons.length}
            persons={this.state.persons}
            clicked={this.togglePersonHandler} 
            /> 
          ) : null}
          {persons}
        </div>
    );
  }
  
}

export default App;
