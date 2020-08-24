import React from 'react';
export default class Order extends React.Component {
    childRef = React.createRef();
    parentRef = React.createRef();
    child = () => {
        console.log(1);
    }
    parent = () => {
        console.log(2);
    }

























    
    render() {
        return (
            <div onClick={this.parent} ref={this.childRef}>
                <div onClick={this.child} ref={this.parentRef}>
                    child
                 </div>[]
            </div>
        )
    }
}
