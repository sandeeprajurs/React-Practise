import {Component} from 'react';

const updatedComponent = (OriginalComponent) => {
    class NewComponent extends Component{

        state = {
            count: 0
        }

        increment = () => {
            this.setState({ count: this.state.count+1 });
        }

        render(){
            return(
                <OriginalComponent count={this.state.count} increment={this.increment}/>
            )
        }
    }
    return NewComponent;
}

export default updatedComponent;