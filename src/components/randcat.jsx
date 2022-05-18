import React from "react";

const randcat = (props) => {
    return (
        <div className="d-flex flex-column text-center">
            <div className="h1">Welcome to Random Cat Pictures!</div>
            <button
                className="btn btn-primary"
                onClick={() => {
                    window.location.reload();
                }}
            >
                More Cats Please
            </button>
            <img className="img-fluid" src="https://loremflickr.com/800/800" alt="..."></img>
        </div>
    );
};

export default randcat;
