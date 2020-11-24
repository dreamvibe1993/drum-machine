import React from 'react';
const btnstyles = {
    boxSizing: 'border-box',
    width: '45px',
    height: '43px',
    margin: '7.4px',
    background: 'none',
    border: 'none',
}

const pad = (props) => {
    return <div 
    onKeyDown={props.keydown}
style={btnstyles}>{props.children}</div>
}

export default pad;