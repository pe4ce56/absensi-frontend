import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ notFound }) {
    return (
        <div className="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
            <div className="container">
                <div className="header-body text-center mb-7">
                    <div className="row justify-content-center">
                        {!notFound
                            ? (
                                <div className="col-xl-5 col-lg-6 col-md-8 px-5">
                                    <h1 className="text-white">Selamat Datang !</h1>
                                    <p className="text-lead text-white">Silahkan login untuk melanjutkan.</p>
                                </div>
                            )
                            : (
                                <div className="container mt-3">
                                    <img width="500px" src="../assets/img/page/404.png" />
                                    <div>
                                        <h1 className="text-white">Oops, Sepertinya halaman yang anda cari tidak ditemukan</h1>
                                        <p className="text-lead text-white">Kembali ke
                                            <Link to="/" className="text-white font-weight-bold"> Dashboard</Link>
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="separator separator-bottom separator-skew zindex-100">
                <svg x={0} y={0} viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <polygon className="fill-default" points="2560 0 2560 100 0 100" />
                </svg>
            </div>
        </div>

    )
}