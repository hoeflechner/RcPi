import React, { Component } from 'react';


class Config extends Component {
    constructor(props) {
        super(props);
        this.state = { config: [] }
    }
    render() {
        var config=this.state.config;
        console.log("config: "+config);
        return (
            <div>
                <center><h1>Config</h1></center>
                {config.map((channel, index) => (
                    <p key={index} >
                        Channel:
                    <input
                            value={channel.Name}
                            onChange={e => {
                                console.log("edit" + e.target.value);
                                this.setState(state => {
                                    const config = state.config.map((item, i) => {
                                        if (i === index) {
                                            return e.target.value;
                                        }
                                        else {
                                            return item;
                                        }
                                    });
                                    return { config, };
                                })
                            }
                            }
                        />
                        , Port:
                    <input
                            value={channel.Port}
                            onChange={e => {
                                channel.Port = e.target.value;
                            }}
                        />
                        , Axis:
                    <input
                            value={channel.Axis}
                            onChange={e => {
                                channel.Axis = e.target.value;
                            }}
                        />
                    </p>
                ))}
            </div>
        )
    }
}



export default Config