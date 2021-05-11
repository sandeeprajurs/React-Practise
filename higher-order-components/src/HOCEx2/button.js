import {Component, Fragment} from 'react';
import updatedComponent from './withCounter';

class Button extends Component{

    render(){
        return(
            <Fragment>
                <button onClick={this.props.increment}>Click Me</button>
                <div>{this.props.count}</div>
            </Fragment>
        )
    }
}

export default updatedComponent(Button);