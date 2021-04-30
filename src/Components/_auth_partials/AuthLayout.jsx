import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'

export default function Authlayout({ render: Component, ...rest }) {

    return (
        <React.Fragment>
            <Navbar />
            <div className="main-content">
                <Header />
                {Component}
            </div>
            <Footer />
        </React.Fragment>
    )
}
