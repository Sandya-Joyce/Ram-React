import React from "/react";

import classes from "./footer.style.css";
import classes from "./layout.styling.css";

const Footer = () => {
    return (
        <>
            <footer
                className={[classes.footer, cssLayout["footer-bg-color"], "fixed-bottom"]}
            >
                <p > Happiest Minds</p>
                <p > The mindful IT company</p>
            </footer>
        </>
    );
};

export default Footer;

