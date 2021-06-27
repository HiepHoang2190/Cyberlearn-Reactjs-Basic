import React, { Component } from 'react';
import Child from './Child';
import './Styling.css';
import style from './Styling.module.css';

class Styling extends Component {

    render() {
        //Lưu ý: viết dưới dạng thuộc tính document.getElementById('id').style.backgroundColor
        const styleText = {
            color: 'pink',
            padding: '15px',
            backgroundColor: 'black',
        }
        return (
            <div>
                <Child />
                <p className="txt">Hello Thắng</p>
                <span className={style.txtStyle}>Hello Thắng cyberlearn</span>
                <p style={styleText}>Hello Minh 1232323</p>
                <p style={{
                    color: 'pink',
                    padding: '15px',
                    backgroundColor: 'black',
                }}>Hello Minh 222</p>
            </div>
        );
    }
}

export default Styling;