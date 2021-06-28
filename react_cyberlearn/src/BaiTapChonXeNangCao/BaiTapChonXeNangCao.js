import React, { Component } from 'react'
import './BaiTapChonXeNangCao.css';
// Import mang du lieu cac model xe
import dataFeatures from '../Data/arrayFeatures.json';
import dataWheels from '../Data/wheels.json';

export default class BaiTapChonXeNangCao extends Component {


    rendericon = () => {
        return dataFeatures.map((item, index) => {
            return <div className="row mt-1 border border-color-default m-3" key={index}>
                <div className="col-2">
                    <img className="p-3" style={{ width: '100%' }} src={item.img} alt={index}></img>
                </div>
                <div className="col-10">
                    <h3 className="p-3">{item.title}</h3>
                    <span className="p-3 pt-0">{item.type}</span>
                </div>
            </div>
        })
    }
    renderWheels = () => {
        return dataWheels.map((item, index) => {
            return <div className="row mt-1 border border-color-default m-3 mt-5" key={index}>
                <div className="col-2">
                    <img className="p-3" style={{ width: '100%' }} src={item.img} alt={index}></img>
                </div>
                <div className="col-10 d-flex flex-colum align-items-center">
                    <span className="p-3">{item.title}</span>
                </div>
            </div>
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <div className="model">
                            <img style={{ width: '100%' }} src="./images/images-black/images-black-1/civic-1.jpg"></img>
                        </div>
                        <div className="card mt-2">
                            <h5 className="card-header text-dark ">Exterior color</h5>
                            <table className="table border border-color-light" border="1">
                                <thead>
                                    <tr>
                                        <th>Color</th>
                                        <th>Black</th>
                                    </tr>
                                    <tr>
                                        <th>Price</th>
                                        <th>$ 19.000,000</th>
                                    </tr>
                                    <tr>
                                        <th>Engine Type</th>
                                        <th>Inline-4-cylinder</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card text-left">
                            <h5 className="card-header text-default" >Exterior color</h5>
                            <div className="container-fluid">
                                {this.rendericon()}
                            </div>
                        </div>
                        <div className="card text-left mt-1">
                            <h5 className="card-header text-default" >Wheels</h5>
                            <div className="container-fluid">
                                {this.renderWheels()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
