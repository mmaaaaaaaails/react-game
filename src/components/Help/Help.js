import React from "react";
import "./Help.css";

const Help = () => {
    return (
        <div>
            <div className="tooltip">
            <i className="fas fa-info-circle fa-2x"></i>
                <span className="tooltiptext">
                    <h3>Hot keys</h3>
                    <p>alt + A - new game</p>
                    <p>alt + Z - fullscreen</p>
                    <p>alt + X - play / pause sound</p>
                    <p>alt + D - RSschool course</p>
                    <p>alt + S - my github</p>
                </span>
            </div>
        </div>
    );
};

export default Help;
