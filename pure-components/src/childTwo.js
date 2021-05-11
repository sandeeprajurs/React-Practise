import './App.css';
import { Component, PureComponent } from 'react';

class ChildTwo extends PureComponent{
    state = {
        score: 0
    }

    //fetch footbal scores
    componentDidMount(){
        setInterval(() => {
            this.setState({ score: 1 });
        }, 2000);
    }

    render(){
        console.log("rendering --- with using purecomponent");
        return(
            <div>{this.state.score}</div>
        )
    }
}

export default ChildTwo;