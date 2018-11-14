import React, { Component } from 'react';

/** 
 * The props.children hold everything that's passed between the <Buttons> </Buttons>,
 * which are all buttons. just renders the passed button as it is.
*/
class Buttons extends Component {
    render() {
        return(
            <div 
            className="Buttons">
            {this.props.children}
            </div>
        )
    }
}

export default Buttons;