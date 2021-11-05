import React, { Component } from 'react'
class Cpn extends Component{
    render(){
        return(<div>组件Cpn</div>)
    }
    componentWillUnmount(){
        console.log("执行componentWillUnmount方法");
    }
    componentDidMount(){
        console.log("执行componentWillUnmount方法");
    }
}
export default class First extends Component {
    constructor(props){
        super(props)
        console.log("执行构造方法");
        this.state={
            count:0,
            isShow:true
        }
    }
    change(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    btnClick(){
        this.setState({count:this.state.count+1})
    }
    render() {
        const {count,isShow}=this.state;
        console.log("执行render方法");
        return (
            <div>
                <h2>{count}</h2>
                <button onClick={()=>{this.btnClick()}}>+</button>
                <hr/>
                <button onClick={e=>this.change()}>切换组件</button>
                {isShow&&<Cpn/>}
            </div>
        )
    }
    // 发送网络请求官方建议
    componentDidMount(){
        console.log("执行componentDidMount方法");
    }
    componentDidUpdate(){
        console.log("执行componentDidUpdate方法");
    }
}
