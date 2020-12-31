import React, { Component } from 'react'
import { AppContext } from '../Contex';

class LeftComponent extends Component {
    // static contextType = AppContext;
    render() {
        console.log("this props", this)
        return (
                <div>I am fifth hahah!!!! ahiya b madis tu ??? joie {JSON.stringify(this.context)}</div>
        )
    }
}
LeftComponent.contextType = AppContext;
export default LeftComponent;