import hoc from './hoc';

const HOCButton = (props) => {
    return (
        <div>
            <button style={props.style}>Click Me</button>
        </div>
    );
}

export default hoc(HOCButton);