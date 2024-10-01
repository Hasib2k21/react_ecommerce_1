import React, { useEffect } from 'react';
import ProductCard from '../../../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/homeSlice';

const ProductsArea = () => {
    const state = useSelector((state) => state.homeSlice);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, []);
    return (
        <>
            {/* products area */}
            {
                state.status != "idle" ?
                    <div className="container">
                        <img style={{width: "100%"}} src={"https://miro.medium.com/v2/resize:fit:1200/1*kkDrV9wcDZrv00HqkNBpyQ.gif"} />
                    </div>
                    :
                    <section className="section-min section product" id="products">
                        <div className="container overflow-hidden">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3 className="section-heading">Featured Products</h3>
                                </div>
                                <div className="single-category-box2 ">
                                    <a className="link-btn" href="#">
                                        <img src="https://team90degree.com/html/tf/bestshop-new-demo/bestshop-demo/assets-for-index-2/img/lg3.jpg" alt="image" />
                                    </a>
                                </div>
                                <div className="new-products-area">
                                    <div className="col-md-12">
                                        <h3 className="section-heading">New Products</h3>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                            {
                                                state?.products?.map(i => {
                                                    return (
                                                        <div key={i.slug} className="col-md-3">
                                                            <ProductCard product={i} />
                                                        </div>
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            }
        </>


    );
}

export default ProductsArea;
