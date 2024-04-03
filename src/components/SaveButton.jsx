import React, { useState } from "react";
import "../components_css/SaveButton.css";
import { FaRegSave } from "react-icons/fa";

const SaveButton = () => {

    return (
        <>
            <button className="btn-save">
                save
                <div className="FaRegSave">
                    <FaRegSave />
                </div>
            </button>
        </>
    );
}

export default SaveButton;