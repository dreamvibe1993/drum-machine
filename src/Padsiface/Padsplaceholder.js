import React from 'react';
import Pad from './Pad';
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
    border: '1px solid red',
    marginBottom: '106px',
    marginLeft: '105px',
    marginTop: '262px'

}

const padsplaceholder = (props) => {
    return (
        <div style={btnsstyle}>{props.children}
        </div>
    )
}

export default padsplaceholder;