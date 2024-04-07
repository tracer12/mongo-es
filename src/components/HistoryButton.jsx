import React, { useState } from "react";
import "../components_css/UtilButton.css";
import { FaHistory } from "react-icons/fa";

const HistoryButton = () => {

    return (
        <>
            <button className="history-button">
                <div className="history-button-content">
                    History
                    <div className="FaHistory">
                        <FaHistory />
                    </div>
                </div>
            </button>
        </>
    );
}

export default HistoryButton;