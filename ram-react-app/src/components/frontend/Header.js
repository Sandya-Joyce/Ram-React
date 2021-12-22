import React from "react"

import classes from "./header.styling.css";
import header_layout from "./layout.styling.css";


const Header = () => {
    return (
        <>
            <header
                className={[classes.header, header_layout["header-bg-color"]]
                }
            >
            <p> Smiles Central</p>
            </header>
        </>
    );
};

export default Header;