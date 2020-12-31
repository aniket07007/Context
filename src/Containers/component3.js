import React from 'react'
import { AppContext } from '../Contex';
import Fourth from './component4';

function heranComponent() {
    return (
        <div>
            <AppContext.Consumer>
                {
                    (abc) => {
                        console.log("ABC", abc)
                        return (
                            <div>
                                <div>chaku tane heran karis ave {JSON.stringify(abc)} </div>
                                <Fourth />
                            </div>
                        )
                    }
                }
            </AppContext.Consumer>
        </div>
    )
}

export default heranComponent;