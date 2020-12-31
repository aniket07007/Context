import React from 'react'
import { AppContext } from '../Contex';

function heranComponent() {
    return (
        <div>
            <AppContext.Consumer>
                {
                    (abc) => {
                        console.log("ABC", abc)
                        return <div>chaku aa vadu 4th haatu {JSON.stringify(abc)} </div>
                    }
                }
            </AppContext.Consumer>
        </div>
    )
}

export default heranComponent;