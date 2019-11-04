import React,{useState} from 'react';
import Global from '../global';

function ControlItem(props){
    console.log("item"+ props.id);
    console.log(Global.Config);
    const [Name, setName] = useState(Global.Config[props.id].Name)
    const [Axis, setAxis] = useState(Global.Config[props.id].Axis)

    function handleNameChange(e){
        //setName(e.target.value);
        console.log("change name item"+ props.id+" to "+e.target.value);
        console.log(Global.Config);
        
        Global.Config[props.id].Name=e.target.value;
    }

    function handleAxisChange(e){
        //setAxis(e.target.value);
        Global.Config[props.id].Axis=e.target.value
    }

   

    return (
        <div>
            <input value={Name} onChange={handleNameChange}/>
            <input value={Axis} onChange={handleAxisChange}/>
        </div>
    )
}

export default ControlItem;