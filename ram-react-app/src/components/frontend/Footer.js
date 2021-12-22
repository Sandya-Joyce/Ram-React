import React from "react";

import classes from "./footer.style.css";
import layout from "./layout.styling.css";

const Footer = () => {
    return (
        <>
            <footer
                className={[classes.footer, layout["footer-bg-color"], "fixed-bottom"]}
            >
                <p > Happiest Minds</p>
                <p > The mindful IT company</p>
            </footer>
        </>
    );
};

export default Footer;

