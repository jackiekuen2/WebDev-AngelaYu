import React from "react";

function Footer() {
    const date = new Date();
    let currentYear = date.getFullYear();

    return (
        <footer>
            <p>CopyrightÂ©{currentYear}</p>
            <p>By Jackie</p>
        </footer>
    )
};

export default Footer;