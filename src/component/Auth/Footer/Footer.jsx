import React from 'react'

export default function Footer(props) {

    return (
        <footer className="py-5" id="footer-main">
            <div className="container">
                <div className="row align-items-center justify-content-xl-between">
                    <div className="col-xl-6">
                        <div className="copyright text-center text-xl-left text-muted">
                            © {new Date().getFullYear()} <a href="https://www.schoolandcollegelistings.com/ID/Malang/193668737354797/SMKN-2-Singosari" className="font-weight-bold ml-1" >SMKN 2 Singosari DEV Team</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
