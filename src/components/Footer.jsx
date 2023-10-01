import React from "react";



const Footer = () => {
    return(
        <div className="footer-container" style={style.footerCONTAINER}>
            <div className="footer-content">
                <strong>Programmed and developed by: Eduard</strong>
            </div>
        </div>
    )
}

export default Footer;

const style = {
    footerCONTAINER: {
        backgroundColor: "#fff",
        padding: "10px",
        textAlign: "center",
        
    }
}