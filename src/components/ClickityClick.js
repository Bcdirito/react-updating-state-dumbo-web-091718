// Code ClickityClick Component Here
import React, {Component} from 'react';

class ClickityClick extends Component {
    constructor(){
        super()

        this.state = {
            hasBeenClicked: false
        }
    }

    handleClick = () => {
        this.setState({
            hasBeenClicked: true
        }, () =>
        console.log(this.state.hasBeenClicked))
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null: 'not'}</p>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}

export default ClickityClick