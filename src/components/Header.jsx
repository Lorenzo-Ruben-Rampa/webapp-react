import React from 'react'

const Header = () => {
    return (
        <nav className="navbar bg-body-tertiary mb-4">
            <div className="container-fluid justify-content-start">
                <Link className="navbar-brand" to="/">Bool Movies</Link>
            </div>
        </nav>
    )
}

export default Header