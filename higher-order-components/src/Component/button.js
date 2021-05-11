import { Component } from 'react';

const style = {
    default: {
        backgroundColor: 'blue',
        color: '#eae8e8',
        padding: '10px'
    },
    disabled:{
        backgroundColor: '#9c9c9c',
        color: '#c7c6c6',
    }
}

class Button extends Component {

    render() {
        let _style =  style.default;
        if(this.props.disabled)
            _style = { _style, ...style.disabled };
        return (
            <div>
                <button style={_style}>Click Me</button>
            </div>
        );
    }
}

export default Button;