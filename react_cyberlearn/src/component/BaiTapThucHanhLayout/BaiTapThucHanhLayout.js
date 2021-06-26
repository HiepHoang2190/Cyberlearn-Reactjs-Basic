import React, { Component } from 'react';
import BodyBTTH from './BodyBTTH';
import FooterBTTH from './FooterBTTH';
import HeaderBTTH from './HeaderBTTH';

class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <HeaderBTTH />
                <BodyBTTH />
                <FooterBTTH />
            </div>
        );
    }
}

export default BaiTapThucHanhLayout;