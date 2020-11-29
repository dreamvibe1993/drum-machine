import React from 'react';

const akaistyle = {
    width: "700px",
    height: "700px",
    backgroundImage: `url("drum-machine-697x641.png")`,
    backgroundRepeat: 'no-repeat',
    marginTop: "20px",
    zIndex: '10'
}
const akai = (props) => {
       return (
       <div style={akaistyle}>{props.children}</div>
        )
}
export default akai;