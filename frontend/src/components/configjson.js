import React, { useState } from 'react';
import { Store } from './store';



function ConfigJson(props) {
    const { state, dispatch } = React.useContext(Store);
    
    console.log("render json")
    return (
        <div>
            <pre><code>
            {JSON.stringify(state.config, null, 3)}
            </code></pre>
        </div>

    );
}



export default ConfigJson