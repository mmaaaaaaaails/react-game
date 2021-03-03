import React from "react";
import "./Help.css";

const Help = () => {
    return (
        <div>
            <div class="tooltip">
            <i class="fas fa-info-circle fa-2x"></i>
                <span className="tooltiptext">
                    <h3>Hot keys</h3>
                    <p>alt + A - new game</p>
                    <p>alt + S - my github</p>
                    <p>alt + D - RSschool course</p>
                    <p>alt + Z - dropping moves</p>
                    <p>alt + X - play / pause sound</p>
                </span>
            </div>
        </div>
    );
};

export default Help;
