import React, { Component } from 'react';

class HandleEvent extends Component {

    // Định nghĩa hàm xử lý sự kiện khi người dùng click vào button click me
    handleClick = (name) => {
        alert("hello: " + name)

    }

    //Truyền tham số xử lý khi click
    handleClickParam = (param, button) => {
        console.log("param", param);
        console.log("param", param);
        console.log("button: ", button.target)
    }
    render() {
        const handleClickFunction = (name) => {
            console.log("Chào " + name)
        }
        return (
            <div>
                <button id="btnClickMe" onClick={() => {
                    this.handleClick("Thắng")
                }}>Click me!</button>
                <button id="btnClickMe2" onClick={() => {
                    handleClickFunction("hahah")
                }}>Click me222!</button>
                <button id="btnClickMe3" onClick={this.handleClickParam.bind(this, "hello men")}>Click me!</button>
            </div>
        );
    }
}

export default HandleEvent;