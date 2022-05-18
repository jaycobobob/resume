import React from "react";

const navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Jacob Edwards</span>
                <span className="d-none d-lg-block">
                    <img
                        className="img-fluid img-profile img-thumbnail rounded-circle mx-auto mb-2"
                        src="https://loremflickr.com/200/200"
                        alt="..."
                    />
                </span>
            </a>
        </nav>
    );
};

export default navbar;
