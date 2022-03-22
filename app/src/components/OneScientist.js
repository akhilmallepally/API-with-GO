import React, { Component, Fragment } from 'react'
export default class OneScientist extends Component {
    state = {scientist:{}};

    componentDidMount(){
        this.setState({scientist:{
            id: this.props.match.params.id,
            name: 'Turing',
            born:1985
        }})
    }

    render(){
        return(
            <Fragment>
                <h2>Scientist : {this.state.scientist.name}</h2>
                <table className='table table-compact table-striped'>
                    <thead></thead>
                        <tbody>
                            <tr>
                                <td><strong>Title:</strong></td>
                                <td>{this.state.scientist.name}</td>
                            </tr>
                            <tr>
                                <td><strong>Title:</strong></td>
                                <td>{this.state.scientist.born} year</td>
                            </tr>

                        </tbody>
                    
                </table>
            </Fragment>
        )
    }
}