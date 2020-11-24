import React from 'react';

const style = {
    width: "181px",
    height: '66px',
    backgroundColor: '#1989b9',
    marginTop: '103px',
    marginLeft: '151px',
    boxShadow: '0 0 10px rgba(25,137,185,.9)',
    borderRadius: '2px',
    padding: '5px',
    boxSizing: 'border-box'
}

const screen = (props) => {
    return (
    <div style={style}>{props.children}</div>
    )
}
export default screen;