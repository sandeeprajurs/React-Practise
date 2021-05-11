import './App.css';
import { Component } from 'react';

class ChildOne extends Component{

    state = {
        score: 0
    }

    //fetch footbal scores
    componentDidMount(){
        setInterval(() => {
            this.setState({ score: 1 });
        }, 2000);
    }

    //checks if nextstate == current state
    shouldComponentUpdate(nextProps, nextState){
        // console.log(`Score : ${this.state.score} ------- Next Score: ${nextState.score}`)
        return this.state.score == nextState.score ? false : true;
    }

    render(){
        console.log("rendering --- with using shouldComponentUpdate");
        return(
            <div>{this.state.score}</div>
        )
    }
}

export default ChildOne;