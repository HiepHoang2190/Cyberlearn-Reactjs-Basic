import React, { Component } from 'react';

class RenderWithLoop extends Component {

    producList = [
        {
            id: 1,
            name: "black car",
            price: 1000,
            img: "./assets/Car-Basic/products/black-car.jpg",
        },
        {
            id: 2,
            name: "red car",
            price: 2000,
            img: "./assets/Car-Basic/products/red-car.jpg",
        },
        {
            id: 3,
            name: "silver car",
            price: 3000,
            img: "./assets/Car-Basic/products/silver-car.jpg",
        },
        {
            id: 4,
            name: "steel car",
            price: 4000,
            img: "./assets/Car-Basic/products/steel-car.jpg",
        },
    ];

    renderTable = () => {
        let mangTrComponent = [];
        for (let index = 0; index < this.producList.length; index++) {
            let product = this.producList[index];
            //Đối tượng jsx (có thể console.log để kiểm tra)
            // console.log(<tr></tr>)
            let trJSX = <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><img style={{ width: "100px" }} src={product.img}></img></td>
                <td></td>
            </tr>
            // console.log('trJSX');
            mangTrComponent.push(trJSX);
        }
        return mangTrComponent;
    };
    render() {
        return (
            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                            <th>img</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RenderWithLoop;