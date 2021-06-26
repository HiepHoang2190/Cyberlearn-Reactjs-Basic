import React, { Component } from 'react';
import BannerBTTh from './BannerBTTh';
import ItemBTTH from './ItemBTTH';

class BodyBTTH extends Component {
    render() {
        return (
            <div>
                <BannerBTTh />

                <section class="pt-4">
                    <div className="container px-lg-5">
                        <div className="row gx-lg-5">
                            <div className="col-lg-6 col-xl-4 mb-5">
                                <ItemBTTH />
                            </div>
                            <div className="col-lg-6 col-xl-4 mb-5">
                                <ItemBTTH />
                            </div>
                            <div className="col-lg-6 col-xl-4 mb-5">
                                <ItemBTTH />
                            </div>

                        </div>
                    </div>

                </section>
            </div>

        );
    }
}

export default BodyBTTH;