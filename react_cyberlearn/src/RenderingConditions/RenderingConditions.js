import React, { Component } from 'react';

class RenderingConditions extends Component {

    login = true;
    userName = "Hoàng Ngọc Hiệp";

    renderContent = () => {
        if (this.login) {
            return <p>Helllo {this.userName}</p>
        }
        return <button>Đăng nhập</button>
    }
    render() {
        return (
            <div>
                {/* {this.login ? <p>Helllo {this.userName}</p> : <button>Đăng nhập</button>} */}
                {this.renderContent()}
            </div>
        );
    }
}

export default RenderingConditions;