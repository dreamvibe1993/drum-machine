import React from 'react';
import classes from './VolumeButtons.module.css'

const buttons = [
    {id: 'mainvup'},
    {id: 'mainvdn'},
    {id: 'smplvup'},
    {id: 'smplvdn'}
]
const volumeButtons = (props) => (
    <div className={classes.ToAccessTheChildren}>
        <div className={classes.VolumeBtnsContainer}>
            {buttons.map((i, index) => {
                return <div 
                key={index}
                onClick={props.clicked} 
                id={i.id}
                ></div>
            })}
        </div>
    </div>
)
export default volumeButtons; 