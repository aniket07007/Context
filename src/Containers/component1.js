import React, { Component } from 'react'
import { AppContext } from '../Contex';
import Fifth from './component5'

class LeftComponent extends Component {
    // static contextType = AppContext;
    render() {
        console.log("this props", this)
        return (
            <div>
                <div>I am left {JSON.stringify(this.context)}</div>
                <Fifth />
                <button onClick={ () => {
                    console.log("before", this.context)
                    this.context.method({...this.context.data, value: "Chaka ni blessings"})
                    
                    console.log("after", this.context)
                }}>Click!!</button>
            </div>
        )
    }
}
LeftComponent.contextType = AppContext;
export default LeftComponent;