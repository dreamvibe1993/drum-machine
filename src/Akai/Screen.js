import React from 'react';
import classes from './Screen.module.css'

const style = {
    width: "181px",
    height: '66px',
    backgroundColor: '#1989b9',
    marginTop: '103px',
    marginLeft: '62px',
    boxShadow: '0 0 10px rgba(25,137,185,.9)',
    borderRadius: '2px',
    padding: '5px',
    boxSizing: 'border-box'
}

const screen = (props) => {
    return (
    <div style={style}>
        <div id="scrSaLWrapper">
            <p id="scrSampPar" className={classes.Screen}>current sample: <br/>{props.screenSample}</p>
            <p id="scrLibrPar" className={classes.Screen}>current library: {props.screenLib}</p>
        </div>
        <div id="scrVolWrapper">
            <p id="scrMvolPar" className={classes.Screen}>Main volume: {props.mainVol}</p>
            <p id="scrSvolPar" className={classes.Screen}>Sample volume: {props.sampVol}</p>
        </div>
    </div>
    )
}
export default screen;