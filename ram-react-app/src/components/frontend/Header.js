import React from "react"

import classes from "./header.styling.css";
import classes from "./layout.styling.css";


const Header = () => {
    return (
        <>
            <header
                className={[classes.header, cssLayout["header-bg-color"]]
                }
            >
            <p> Smiles Central</p>
            </header>
        </>
    );
};

export default Header;