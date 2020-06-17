import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  
    useEffect(() => {
      console.log('[Cockpit.js] useEffect')
      //http request
   setTimeout(() => {
        alert('Saved data')
      }, 1000);
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect')
      }
    }, [])

    // useEffect
    useEffect(()=>{
      console.log('[Cockpit.js]  2nd useEffect')
      return () => {
        console.log('[Cockpit.js] cleanup work in  2nd useEffect')
      }
    })

    
    let btnClass = '';
    if(props.showPerson) {
        btnClass = classes.Red;
}

    const assignClasses = []
    if(props.personsLength <= 2) {
      assignClasses.push(classes.red) //classes = ['red']
    }
  if(props.personsLength <= 1) {
    assignClasses.push(classes.bold) //classes = ['red', 'bold']
  }
    return(
        <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
            <p className={assignClasses.join(' ')}>This really works</p>
            <button 
            className={btnClass} 
            onClick= {props.clicked}>
            Toggle People
            </button>
            </div>
    );
}
export default React.memo(Cockpit);