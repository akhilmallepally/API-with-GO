import React, { Component, Fragment } from 'react';

export default class Scientists extends Component {
    state = {scientists: []}

    componentDidMount() {
        this.setState({
            //adding sample data
            scientists:[
                {id:1, name:"Alan Turing", born:1982},
                {id:2, name:"Test2 ", born:1912},
                {id:3, name:"Test3", born:1907}
            ]
        })
    }

    render() {
        return (
            <Fragment>
            <h2>Choose a scientist name</h2>
            <ul>
                {this.state.scientists.map((s)=>(
                    <li key={s.id}>
                          {s.name}
                    </li>
                ))}
            </ul>
            </Fragment>
        )
    }
}
