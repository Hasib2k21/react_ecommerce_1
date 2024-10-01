import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            {/* header */}
            <nav className="navbar navbar-fixed-top shadow" id="js-nav">
                <div className="container">
                    <div className="navbar-header">
                        <button
                            className="navbar-toggle"
                            data-target="#myNavbar"
                            data-toggle="collapse"
                            type="button"
                        >
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="#">
                            {" "}
                            <img
                                src="https://team90degree.com/html/tf/bestshop-new-demo/bestshop-demo/assets-for-index-2/img/logo.png"
                                alt=""
                            />{" "}
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link to={'/products'}>products</Link>
                            </li>
                            <li>
                                <Link to={'/cart'}>Cart</Link>
                            </li>
                            <li>
                                <Link to={'/checkout'}>Checkout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/*/ End header */}
        </header>
    );
}

export default Header;
