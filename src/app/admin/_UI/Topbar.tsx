import Link from 'next/link';
import React from 'react';

const Topbar = () => {
    return (
        <div>
            <nav className="navbar container navbar-expand-lg navbar-light flex items-center">
                <a className="navbar-brand" href="/">
                    <img src="/assets/img/logo/logo.png" width={200} alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse mt-2">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" href="/admin/home">Home </Link>
                        <Link className="nav-item nav-link active" href="/admin/service">Services</Link>
                        <Link className="nav-item nav-link active" href="/admin/review">Review</Link>
                        <Link className="nav-item nav-link active" href="/admin/portfolio">Portfolios</Link>
                        <Link className="nav-item nav-link active" href="/admin/team">Team</Link>
                        <Link className="nav-item nav-link active" href="/admin/pricing">Pricing</Link>
                        <Link className="nav-item nav-link active" href="/admin/general">General Pricing</Link>
                        <Link className="nav-item nav-link active" href="/admin/about">About</Link>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Topbar;