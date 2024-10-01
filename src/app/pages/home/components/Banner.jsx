import React from 'react';

const Banner = () => {
    return (
        <>
            {/* slider */}
            <section className="home section image-slider" id="home" style={{marginTop: "-30px"}}>
                <div className="home-slider text-center">
                    <div
                        className="swiper-slide"
                        style={{
                            background:
                                "url(https://team90degree.com/html/tf/bestshop-new-demo/bestshop-demo/assets-for-index-2/img/slider/slide4.jpg)"
                        }}
                    >
                        <h1>
                            wash your hand <span className="hglight" />
                        </h1>
                        <h2 className="home-slider-title-main">
                            80% Discount for this season{" "}
                        </h2>
                        <div className="home-buttons text-center">
                            {" "}
                            <a href="#products" className="btn btn-lg  btn-primary">
                                our products
                            </a>{" "}
                        </div>
                        <a className="arrow bounce text-center" href="#about">
                            {" "}
                            <span className="fa fa-mouse" />{" "}
                            <span className="fa fa-angle-double-down" />{" "}
                        </a>
                    </div>
                </div>
            </section>
            {/*/ slider */}
        </>

    );
}

export default Banner;
