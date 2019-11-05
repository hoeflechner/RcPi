import React,{useState} from 'react';
import Global from '../global';

function ControlItem(props){
    console.log("item"+ props.id);
    console.log(Global.Config);
    const [name, setName] = useState(Global.Config[props.id].Name)
    const [axis, setAxis] = useState(Global.Config[props.id].Axis)

    function handleNameChange(e){
        setName(e.target.value);
        // console.log("change name item"+ props.id+" to "+e.target.value);
        // console.log(Global.Config); 
        Global.Config[props.id].Name=name;
    }

    function handleAxisChange(e){
        setAxis(e.target.value);
        Global.Config[props.id].Axis=axis
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange}/>
            <input value={axis} onChange={handleAxisChange}/>
        </div>
    )
}

export default ControlItem;