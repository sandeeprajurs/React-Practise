import {Component, Fragment} from 'react';
import updatedComponent from './withCounter';

class HowerComponent extends Component{

    render(){
        return(
            <Fragment>
                <h1 onMouseOver={this.props.increment}>Count increments on hove</h1>
                <div>{this.props.count}</div>
            </Fragment>
        )
    }
}

export default updatedComponent(HowerComponent);