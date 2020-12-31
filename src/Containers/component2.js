import React from 'react'
import { AppContext } from '../Contex';
import HeranComp from './component3'
function rightComponent() {
    return (
        <div>
            <AppContext.Consumer>
                {
                    (abc) => {
                        return (
                            <div>
                                <div>I am right {JSON.stringify(abc)} </div>
                                <HeranComp/>
                            </div>
                        )
                    }
                }
            </AppContext.Consumer>
        </div>
    )
}

export default rightComponent;