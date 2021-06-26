import React, { Component } from 'react';
import HeaderDemo from './HeaderDemo';
import Product from './Product';

class BaiTapChiaLayout extends Component {
    render() {
        return (
            <div>
                <HeaderDemo />
                <Product />
            </div>
        );
    }
}

export default BaiTapChiaLayout;