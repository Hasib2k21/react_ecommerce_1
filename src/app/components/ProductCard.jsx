import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <>
            <div className=" product-list product-list-vertical" style={{ border: "1px solid gray", height: "calc(100% - 30px)" }}>
                <li className="swiper-slide  text-center">
                    <span className="product-list-left pull-left" style={{height: '280px',display: 'block', overflow: 'hidden'}}>
                        <span className="sale-p">sale</span>
                        <a href="#" data-target="#product-01" data-toggle="modal">
                            <img
                                alt="product image"
                                className="product-list-primary-img"
                                src={`https://files.etek.com.bd/resize/cache/${product.product_image?.url}?heigth=400&width=400`}
                            />
                            <img
                                alt="product image"
                                className="product-list-secondary-img"
                                src="https://team90degree.com/html/tf/bestshop-new-demo/bestshop-demo/assets-for-index-2/img/index-3-products/p2.jpg"
                            />
                        </a>
                    </span>
                    <a href="#" data-target="#product-01" data-toggle="modal">
                        <span className="product-list-right pull-left">
                            <span className="product-list-name h5 black-color" style={{fontSize: '16px', lineHeight: '22px'}}>
                                {product.title}
                            </span>
                            <span className="product-list-price">$400.00</span>
                            <span className="product-list-price sell-p">
                                <del>$580.00</del>
                            </span>
                            <span className="rating-area">
                                <span className="fa fa-star high_light" />
                                <span className="fa fa-star high_light" />
                                <span className="fa fa-star high_light" />
                                <span className="fa fa-star high_light" />
                                <span className="fa fa-star" />
                            </span>
                        </span>
                    </a>
                    <button
                        className="btn btn-default add-item"
                        type="button"
                        data-image="https://team90degree.com/html/tf/bestshop-new-demo/bestshop-demo/assets-for-index-2/img/index-3-products/p12.jpg"
                        data-name="women white backless mini"
                        data-cost={400.0}
                        data-id={1}
                    >
                        add to cart
                    </button>
                </li>
            </div>
        </>
    );
}

export default ProductCard;
