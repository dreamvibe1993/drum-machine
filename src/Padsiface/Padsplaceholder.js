import React from 'react';
const btnsstyle = {
    boxSizing: 'border-box',
    width: '275px',
    height: '274px',
    paddingTop: '16px',
    paddingRight: '15px',
    paddingLeft: '13px',
    paddingBottom: '17px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    border: 'none',
    marginBottom: '106px',
    marginLeft: '105px',
    marginTop: '94px'

}

const padsplaceholder = (props) => {
    return (
        <div style={btnsstyle}>{props.children}
        </div>
    )
}

export default padsplaceholder;