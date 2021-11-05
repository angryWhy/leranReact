import React, { Component } from 'react'
import PropTypes from 'prop-types';
class Child extends Component{
    render(){
        const { name,age}=this.props;
        return(
            <div>
                <h2>{name}</h2>
                <h2>{age}</h2>
            </div>
        )
    }
}

export default class Second extends Component {
    render() {
        return (
            <div>
                {/*传入到子类组件的props当中*/}
                <Child name="van" age={[20]} />
            </div>
        )
    }
}
Second.protoTypes={
    name:PropTypes.string,
    age:PropTypes.string
}
