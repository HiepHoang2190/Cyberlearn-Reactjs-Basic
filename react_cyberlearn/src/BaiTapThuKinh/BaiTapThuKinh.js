import React, { Component } from 'react';
import dataGlasses from '../Data/dataGlasses.json';

class BaiTapThuKinh extends Component {


    renderGlassesList = () => {
        return dataGlasses.map((glassesItem, index) => {
            return <img className="ml-2 p-2 border border-width-1" style={{ width: '110px', cursor: 'pointer' }} key={index} src={glassesItem.url}></img>
        });
    }

    render() {

        const styleGlasses = {
            width: '150px',
            top: '75px',
            right: '70px',
            opacity: 0.8
        }
        const infoGlasses = {
            width: '250px',
            top: '200px',
            left: '270px',
            paddingLeft: '15px',
            backgroundColor: 'rgba(255,127,0, .5)',
            height: '105px',
            textAlign: 'left'
        }
        return (
            <div style={{ backgroundImage: 'url(./glassesImage/background.jpg)', backgroundSize: '2000px', minHeight: '2000px' }} >
                <div style={{ backgroundColor: 'rgba(0,0,0, .8)', minHeight: '2000px' }}>
                    <h3 style={{ backgroundColor: 'rgba(0,0,0, .3)' }} className="text-center text-light p-5">
                        TRY GLASSES APP ONLINE
                    </h3>
                    <div className="container">
                        <div className="row mt-5 text-center">
                            <div className="col-6">
                                <div className="position-relative">
                                    <img className="position-absolute" style={{ width: '250px' }} src="./glassesImage/model.jpg" alt="model.jpg"></img>
                                    <img style={styleGlasses} className="position-absolute" src="./glassesImage/v1.png"></img>
                                    <div style={infoGlasses} className="position-relative ">
                                        <p style={{ color: '#AB82FF', fontSize: '17px' }} className="font-weight-bold ">Tên kính</p>
                                        <span style={{ fontSize: '13px', fontWeight: '400' }}>Mô tả</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <img style={{ width: '250px' }} src="./glassesImage/model.jpg" alt="model.jpg"></img>

                            </div>
                        </div>
                    </div>
                    {/* Div chứa các kính được chọn */}
                    <div className="bg-light container text-center mt-5 d-flex justify-content-center" >
                        {this.renderGlassesList()}
                    </div>
                </div>
            </div >
        );
    }
}

export default BaiTapThuKinh;