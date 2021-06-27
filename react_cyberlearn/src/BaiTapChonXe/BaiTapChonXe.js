import React, { Component } from 'react';

class BaiTapChonXe extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-7">
                        <img style={{ width: "100%" }} src={'/assets/Car-Basic/products/black-car.jpg'} alt="black-car"></img>
                    </div>
                    <div className="col-5">
                        <div className="card text-white ">
                            <div className="card-header text-primary">Exterior Color</div>
                            <div className="card-body text-dark">
                                <div className="row border-light pt-2 pb-2 mt-2" onClick={() => { }} style={{ cursor: 'pointer' }}>
                                    <img className="col-2" src={'/assets/Car-Basic/icons/icon-black.jpg'} alt="black-icon"></img>
                                    <div className="col-10">
                                        <h3>Crystal Black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div className="row border-light pt-2 pb-2 mt-2" onClick={() => { }} style={{ cursor: 'pointer' }}>
                                    <img className="col-2" src={'/assets/Car-Basic/icons/icon-steel.jpg'} alt="steel-icon"></img>
                                    <div className="col-10">
                                        <h3>Crystal Black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div className="row border-light pt-2 pb-2 mt-2" onClick={() => { }} style={{ cursor: 'pointer' }}>
                                    <img className="col-2" src={'/assets/Car-Basic/icons/icon-silver.jpg'} alt="silver-icon"></img>
                                    <div className="col-10">
                                        <h3>Crystal Black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div className="row border-light pt-2 pb-2 mt-2" onClick={() => { }} style={{ cursor: 'pointer' }}>
                                    <img className="col-2" src={'/assets/Car-Basic/icons/icon-red.jpg'} alt="red-icon"></img>
                                    <div className="col-10">
                                        <h3>Crystal Black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default BaiTapChonXe;