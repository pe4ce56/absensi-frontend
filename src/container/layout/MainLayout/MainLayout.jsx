import React from 'react'
import { Header, Sidenav, Topnav, Footer } from '../../../component/MainPage/index'

export default function Mainlayout(props) {
    const { render: Children, ...rest } = props
    return (
        <React.Fragment>
            <Sidenav />
            <div className="main-content" id="panel">
                <Topnav />
                <Header />
                <div className="container-fluid mt--6">
                    <Children {...rest} />
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}
