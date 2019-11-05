import React from 'react';
import { Store } from './store';

function ControlItem(props) {
    const { state, dispatch } = React.useContext(Store);
    const [config, setConfig] = React.useState(state.config);
    //const [name, setName] = useState(state.config[props.id].Name);
    //const [axis, setAxis] = useState(state.config[props.id].Axis);

    function handleNameChange(e) {
        let c = JSON.parse(JSON.stringify(state.config));

        c[props.id].Name = e.target.value;

        setConfig(c);
        console.log((config === state.config));
    }

    function handleAxisChange(e) {
        let c = JSON.parse(JSON.stringify(state.config));

        c[props.id].Axis = e.target.value;

        setConfig(c);
        console.log((config === state.config));
    }

    function updateStore() {
        return dispatch({
            type: 'UPDATE',
            payload: config
        });
    };

    React.useEffect(() => {
        console.log(config);
        console.log(state.config);
        if (config !== state.config) {
            updateStore();
        }
    }, config);

    console.log("render item " + props.id + " ");
    return (
        <div>
            <input defaultValue={state.config[props.id].Name} onChange={handleNameChange} />
            <input defaultValue={state.config[props.id].Axis} onChange={handleAxisChange} />
        </div>
    )
}

export default ControlItem;