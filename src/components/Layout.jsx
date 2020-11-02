import React from 'react';
import Navbar from './navbar'
import Footer from './Footer';

const Layout = ({children}) => (
    <div className='container'>
        <Navbar />
        {children}
        <Footer />
    </div>


);
export default Layout;