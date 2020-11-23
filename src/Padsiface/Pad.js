import React from 'react';
const btnstyles = {
    boxSizing: 'border-box',
    width: '45px',
    height: '43px',
    margin: '7.4px',
    background: 'none',
    border: '1px solid red'
}

const pad = (props) => {
    return <div 
    name={props.name} 
    id={props.id} 
    onClick={props.click} 
    style={btnstyles}></div>
}

export default pad;