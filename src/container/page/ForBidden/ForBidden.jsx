import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Header, Footer } from '../../../component/Auth/index'

export default function Notfound(props) {
    const body = document.querySelector('body')

    useEffect(() => {
        body.classList.add('bg-default')
        return () => body.classList.remove('bg-default')
    })

    return (
        <React.Fragment>
            <Navbar />
            <div className="main-content">
                <Header forBidden={true} />
            </div>
            <Footer />
        </React.Fragment>
    )
}
