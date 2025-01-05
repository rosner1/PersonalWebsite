import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        document.title = "Jonah Rosner";
    }, []);


    return (
        <React.Fragment>
            <Helmet>
                <title>Homepage</title>
            </Helmet>
            <h1>Jonah Rosner's Website!</h1>
        </React.Fragment>

    );
};

export default Homepage;