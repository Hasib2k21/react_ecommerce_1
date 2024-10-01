import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WebsiteLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div style={{ marginTop: '100px' }}>
                <Outlet />
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default WebsiteLayout;
