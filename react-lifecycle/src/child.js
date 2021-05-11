import { Component } from 'react';

class Child extends Component {

    // state={
    //     count: 0
    // }

    constructor() {
        console.log("----------constructor-------------");
        super();
        this.state = {
            count: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("----------getDerivedStateFromProps-------------");
        return { count: props.count * 2 };
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("----------shouldComponentUpdate-------------");
        if (nextState.count > 5)
            return false;
        else
            return true;
    }

    componentDidMount() {
        console.log("----------componentDidMount-------------");
    }

    //can used with prevstate, prevprops and componentDidUpdate
    getSnapshotBeforeUpdate(prevProp, prevState) {
        console.log("----------getSnapshotBeforeUpdate-------------");
        return prevProp.count * 2;
    }

    //here all the parameters are optional
    componentDidUpdate(props, state, snapShot) {
        console.log("----------componentDidUpdate-------------");
        console.log(snapShot);
    }

    render() {
        console.log("-----------render-----------");
        return (
            <div>
                <div>Child Comp Count</div>
                <div>{this.state.count}</div>
            </div>
        )
    }
}

export default Child;