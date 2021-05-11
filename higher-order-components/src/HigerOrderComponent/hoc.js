import { Component } from 'react';
import style from './styles';

const transulateProps = (props) => {
    let _style = {...style.default};
    if(props.disable){
        _style = { ..._style, ...style.disabled };
    }
    let newProps = {...props, style: _style};
    return newProps;
}

export default (wrappedComponent) => {
    console.log(wrappedComponent);
    return function wrappedRender(args){
        return wrappedComponent(transulateProps(args));
    }
}