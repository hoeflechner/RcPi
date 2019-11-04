import React from 'react';
import ControlItem from './controlitem';
import Global from '../global';

function Config() {
    console.log("Config:")
    console.log(Global.Config);

    return (
        <div>
            <center><h1>Config</h1></center>
            {Global.Config.map((c, index) => (
                <li key={index} >
                    Control Item:
                    <ControlItem id={index}/>
                </li>
            ))}
        </div>

    )
}



export default Config