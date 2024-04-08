import React, { useState } from "react";
import "../components_css/ExplainModal.css";
import ExplainOrigin from "./ExplainComponent/ExplainOrigin";
import ExplainTranslate from "./ExplainComponent/ExplainTranslate";
import "../components_css/ExplainContent.css"

const ExplainModal = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button onClick={toggleModal} className="button-modal">
                explain
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <p className="modal-title">Explain</p>
                        <br />
                        <p className="modal-text">
                            <div className="explain-content-box">
                                <ExplainOrigin />
                                <ExplainTranslate />
                            </div>
                        </p>
                        <button className="modal-close-button" onClick={toggleModal}>
                            CLOSE
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ExplainModal;