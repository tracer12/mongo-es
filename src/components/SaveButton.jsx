import React, { useState } from "react";
import "../components_css/UtilButton.css";
import { FaRegSave } from "react-icons/fa";

const SaveButton = () => {

    return (
        <>
            <button className="save-button">
                <div className="save-button-content">
                    Save
                    <div className="FaRegSave">
                        <FaRegSave />
                    </div>
                </div>
            </button>
        </>
    );
}

export default SaveButton;