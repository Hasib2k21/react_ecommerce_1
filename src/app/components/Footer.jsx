import React from 'react';

const Footer = () => {
    return (
        <>
            {/* Footer Section */}
            <div className="section section-min">
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-12">
                                <div className="f_logo">
                                    <a href="#">
                                        <img src="assets-for-index-2/img/logo.png" alt="" />
                                    </a>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit best shop
                                        for you voluptatem.Sed ut perspiciatis unde omnis iste natus
                                        errorsit.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12 info_menu">
                                <h4>INFORMATIONS</h4>
                                <ul>
                                    <li>
                                        <a href="#"> Delivery information </a>
                                    </li>
                                    <li>
                                        <a href="#"> Privacy Policy </a>
                                    </li>
                                    <li>
                                        <a href="#"> Terms &amp; Conditions </a>
                                    </li>
                                    <li>
                                        <a href="#"> Return &amp; Exchange </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#"> Free Shipping </a>
                                    </li>
                                    <li>
                                        <a href="#"> Order Status </a>
                                    </li>
                                    <li>
                                        <a href="#"> Gift Cards</a>
                                    </li>
                                    <li>
                                        <a href="#"> International</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4  col-sm-12">
                                <div className="footer-newsletter">
                                    <div className="center">
                                        <h4>stay with us</h4>
                                        <form action="#" method="post">
                                            <div className="input-group">
                                                <input
                                                    className="form-control "
                                                    type="text"
                                                    placeholder="e-mail"
                                                />
                                                <span className="input-group-btn">
                                                    <button className="btn btn-default" type="button">
                                                        <span className="fa fa-arrow-right" />
                                                    </button>
                                                </span>
                                            </div>
                                        </form>
                                        <div className="social">
                                            <ul>
                                                <li className="fndus">Find us here:</li>
                                                <li>
                                                    <a href="http://facebook.com/" target="_blank">
                                                        <span className="fa fa-facebook" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/" target="_blank">
                                                        <span className="fa fa-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="http://linkedin.com/" target="_blank">
                                                        <span className="fa fa-linkedin" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://vimeo.com/" target="_blank">
                                                        <span className="fa fa-vimeo" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="http://youtube.com/" target="_blank">
                                                        <span className="fa fa-youtube" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix col-md-12 col-sm-12">
                                <hr />
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <div className="footer-copyright">
                                    <p>© 2022 Bestshop - All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>

    );
}

export default Footer;
